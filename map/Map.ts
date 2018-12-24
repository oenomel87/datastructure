interface Entry<S, T> {
    key: S;
    value: T;
}

export default class Map<S, T> {
    private storage: Array<Entry<S, T>> = [];

    public has(key: S): boolean {
        return this.find(key) !== null;
    }

    public put(key: S, value: T): void {
        if(this.has(key)) {
            this.find(key)!.value = value;
        } else {
            this.storage.push({
                key: key,
                value: value
            });
        }
    }

    private find(key: S): Entry<S, T> | null {
        for(let i = 0; i < this.storage.length; i++) {
            if(this.storage[i].key === key) {
                return this.storage[i];
            }
        }
        return null;
    }

    public get(key: S): T | null {
        const entry = this.find(key);
        return entry === null ? null : entry.value;
    }

    public delete(key: S): void {
        for(let i = 0; i < this.storage.length; i++) {
            if(this.storage[i].key === key) {
                this.storage.splice(i, 1);
                return;
            }
        }
    }
}