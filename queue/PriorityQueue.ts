interface IPriorityQueue<T> {
    value: T,
    prioirty: number
}

export default class PriorityQueue<T> {
    queue: Array<IPriorityQueue<T>> = []

    dequeue(): T {
        if(this.queue.length > 0) {
            return this.queue.shift()!.value;
        }
        throw new Error('Queue is empty');
    }

    enqueue(item: IPriorityQueue<T>): void {
        let added = false;
        for(let i = 0; i < this.queue.length; i++) {
            const q = this.queue[i];
            if(item.prioirty < q.prioirty) {
                this.queue.splice(i, 0, item);
                added = true;
                break;
            }
        }

        if(!added) {
            this.queue.push(item);
        }
    }

    front(): T {
        return this.queue[0].value;
    }

    print(): void {
        console.log(this.queue);
    }
}