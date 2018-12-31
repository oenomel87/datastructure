interface Node<T> {
    element: T;
    next: Node<T> | null;
}

export default class LinkedList<T> {
    private head: Node<T> | null = null;
    private length: number = 0;

    public size(): number {
        return this.length;
    }

    public add(element: T): void {
        const node = { element, next: null };
        if(this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }

        this.length++;
    }

    public remove(element: T): void {
        if(this.head === null) {
            throw new Error('LinkedList is empty');
        } else if(this.head.element === element) {
            this.head = this.head.next;
        } else {
            let currentNode: Node<T> | null = this.head;
            while(currentNode && currentNode.next) {
                if(currentNode.next.element === element) {
                    currentNode.next = currentNode.next.next;
                    this.length--;
                }
                currentNode = currentNode.next;
            }
        }
    }

    public indexOf(element: T): number {
        let index = 0;
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        } 
        return -1;
    }
}
