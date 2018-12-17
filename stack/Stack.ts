export default class Stack<T> {

    private storage: Array<T> = []

    private size: number = 0

    constructor() {}

    push(item: T): void {
        this.storage.push(item);
        this.size++;
    }

    peek(): T {
        return this.storage[this.size - 1];
    }

    pop(): T {
        const item = this.storage[this.size - 1];
        delete this.storage[this.size - 1];
        this.size--;
        return item;
    }

    length(): number {
        return this.size;
    }
}
