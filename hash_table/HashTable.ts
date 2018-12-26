interface Entry<T> {
    key: string;
    value: T;
}

const storageLimit = 5;

export default class HashTable<T> {
    private storage: Array<Array<Entry<T>>> = [];

    public print(): void {
        console.log(this.storage);
    }
    
    public hash(key: string): number {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = hash * 31 + key.charCodeAt(i);
        }
        return hash % storageLimit;
    }

    public put(key: string, value: T): void {
        const index = this.hash(key);
        if(this.storage[index] === undefined) {
            this.storage[index] = [
                { key: key, value: value }
            ]
        } else {
            let inserted = false;
            for(let i = 0; i < this.storage[index].length; i++) {
                if(this.storage[index][i].key === key) {
                    this.storage[index][i].value = value;
                    inserted = true;
                }
            }

            if(!inserted) {
                this.storage[index].push({ key: key, value: value });
            }
        }
    }
    
    public remove(key: string): void {
        const index = this.hash(key);
        const entries = this.storage[index];
        if(entries.length === 1 && entries[0].key === key) {
            delete this.storage[index];
        } else {
            for(let i = 0; i < entries.length; i++) {
                if(entries[i].key === key) {
                    delete entries[i];
                }
            }
        }
    }

    public get(key: string): Entry<T> | undefined {
        const index = this.hash(key);
        const entries = this.storage[index];
        if(entries === undefined) {
            return undefined;
        }

        for(let i = 0; i < entries.length; i++) {
            if(entries[i].key === key) {
                return entries[i];
            }
        }

        return undefined;
    }
}
