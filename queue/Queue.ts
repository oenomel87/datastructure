export default class Queue<T> {
    private queue: Array<T> = [];

    enqueue(item?: T): void {
        this.queue.push(item!);
    }

    dequeue(): T {
        if(this.queue.length > 0) {
            return this.queue.shift()!;
        }
        throw new Error('Queue is empty');
    }

    front(): T {
        return this.queue[0];
    }

    print(): void {
        console.log(this.queue);
    }
}
