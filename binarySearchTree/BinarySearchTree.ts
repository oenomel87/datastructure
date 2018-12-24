import Node from'./Node';

export default class BinarySearchTree<T> {
    rootNode: Node<T>;

    constructor(value: T) {
        this.rootNode = new Node<T>(value);
    }

    find(value: T): boolean {
        return this.findNode(this.rootNode, value) ? true : false;
    }

    private findNode(node: Node<T>, value: T): Node<T> | never {
        if(!node) {
            throw new Error(`Cannot find ${value}`);
        } else if(node.value === value) {
            return node;
        } else if(node.value < value) {
            return this.findNode(node.rightNode, value);
        }
        return this.findNode(node.leftNode, value);
    }

    findMin(): T {
        let node = this.rootNode;
        while(typeof node.leftNode !== 'undefined') {
            node = node.leftNode;
        }
        return node!.value;
    }

    findMax(): T {
        let node = this.rootNode;
        while(node.rightNode !== undefined) {
            node = node.rightNode;
        }
        return node!.value;
    }

    insert(value: T): void {
        this.insertNode(this.rootNode, value);
    }

    private insertNode(node: Node<T>, value: T): void {
        if(!this.rootNode) {
            node = new Node<T>(value);
        } else if(value <= node.value) {
            this.insertToLeftNode(node, value);
        } else {
            this.insertToRightNode(node, value);
        }
    }

    private insertToLeftNode(node: Node<T>, value: T): void {
        if(node.leftNode === undefined) {
            node.leftNode = new Node<T>(value);
        } else {
            this.insertNode(node.leftNode, value);
        }
    }

    private insertToRightNode(node: Node<T>, value: T): void {
        if(node.rightNode === undefined) {
            node.rightNode = new Node<T>(value);
        } else {
            this.insertNode(node.rightNode, value);
        }
    }
}
