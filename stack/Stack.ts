export default class Stack<T> {

    private storage: Array<T> = []

    private size: number = 0

    constructor() {}

    push(item: T): void {
        this.storage.push(item);
        this.size++;
    }

    peek(): T {
        if(this.size === 0) {
            throw Error('Stack is undefined');
        }
        return this.storage[this.size - 1];
    }

    pop(): T {
        if(this.size === 0) {
            throw Error('Stack is undefined');
        }
        const item = this.storage[this.size - 1];
        this.storage.splice(this.size - 1, 1);
        this.size--;
        return item;
    }

    length(): number {
        return this.size;
    }
}
