export default class Node<T> {
    leftNode!: Node<T>;
    rightNode!: Node<T>;

    constructor(public value: T) {}
}
