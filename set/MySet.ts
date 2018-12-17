export default class MySet<T> {
    private storage: Array<T> = [];
    private size: number = 0;

    add(item: T): MySet<T> {
        if(this.storage.indexOf(item) === -1) {
            this.storage.push(item);
            this.size++;
        }
        return this;
    }

    remove(item: T): void {
        const index = this.storage.indexOf(item);
        if(index !== -1) {
            this.storage.splice(index, 1);
            this.size--;
        }
    }

    contains(item: T): boolean {
        return this.storage.indexOf(item) !== -1;
    }

    values(): Array<T> {
        return this.storage;
    }

    length(): number {
        return this.size;
    }

    union(otherSet: MySet<T>): MySet<T> {
        const newSet = new MySet<T>();
        this.values().forEach(item => newSet.add(item));
        otherSet.values().forEach(item => newSet.add(item));
        return newSet;
    }

    intersection(otherSet: MySet<T>): MySet<T> {
        const newSet = new MySet<T>();
        this.values()
            .filter(item => otherSet.contains(item))
            .forEach(item => newSet.add(item));
        return newSet;
    }

    difference(otherSet: MySet<T>): MySet<T> {
        const newSet = new MySet<T>();
        this.values()
            .filter(item => !otherSet.contains(item))
            .forEach(item => newSet.add(item));
        return newSet;
    }

    isSubset(otherSet: MySet<T>): boolean {
        return this.values().every(item => otherSet.contains(item))
    }
}