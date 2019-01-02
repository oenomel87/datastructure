export default class Node<T> {
    parentNode: Node<T> | null = null;
    leftNode: Node<T> | null = null;
    rightNode: Node<T> | null = null;

    constructor(public value: T, parentNode: Node<T> | null) {
        this.value = value;
        this.parentNode = parentNode;
    }

    public isLeftNode(): boolean {
        return this.parentNode!.leftNode !== null && this.parentNode!.leftNode!.value === this.value;
    }

    public isRightNode(): boolean {
        return this.parentNode!.rightNode !== null && this.parentNode!.rightNode!.value === this.value;
    }

    public hasChild(): boolean {
        return this.leftNode !== null || this.rightNode !== null;
    }
}
