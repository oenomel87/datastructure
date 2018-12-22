import Node from'./Node';

export default class BinarySearchTree<T> {
    rootNode: Node<T>;

    constructor(rootValue: T) {
        this.rootNode = new Node<T>(rootValue);
    }

    find(value: T): boolean {
        return this.findNode(this.rootNode, value) !== undefined;
    }

    private findNode(node: Node<T>, value: T): Node<T> | undefined {
        if(node === undefined) {
            return undefined;
        } else if(node.value === value) {
            return node;
        } else if(node.value < value) {
            return this.findNode(node.rightNode, value);
        }
        return this.findNode(node.leftNode, value);
    }

    insert(value: T): void {
        this.insertNode(this.rootNode, value);
    }

    private insertNode(node: Node<T>, value: T): void {
        if(node.leftNode && value < node.value) {
            this.insertNode(node.leftNode, value);
        } else if(node.rightNode && value > node.value) {
            this.insertNode(node.rightNode, value);
        } else if(value < node.value) {
            node.leftNode = new Node<T>(value);
        } else if(value > node.value) {
            node.rightNode = new Node<T>(value);
        }
    }
}
