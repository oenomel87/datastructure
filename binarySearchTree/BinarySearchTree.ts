interface Node<T> {
    leftNode: Node<T> | null;
    rightNode: Node<T> | null;
    value: T;
}

export default class BinarySearchTree<T> {
    private rootNode: Node<T> | null = null;

    public find(value: T): boolean {
        return this.findNode(this.rootNode, value) ? true : false;
    }

    private findNode(node: Node<T> | null, value: T): Node<T> | never {
        if(!node) {
            throw new Error(`Cannot find ${value}`);
        } else if(node.value === value) {
            return node;
        } else if(node.value < value) {
            return this.findNode(node.rightNode, value);
        }
        return this.findNode(node.leftNode, value);
    }

    public findMin(): T {
        let node = this.rootNode;
        if(node === null) {
            throw new Error('Tree is empty');
        }
        while(node.leftNode !== null) {
            node = node.leftNode;
        }
        return node.value;
    }

    public findMax(): T {
        let node = this.rootNode;
        if(node === null) {
            throw new Error('Tree is empty');
        }
        while(node.rightNode !== null) {
            node = node.rightNode;
        }
        return node.value;
    }

    public insert(value: T): void {
        if(this.rootNode === null) {
            this.rootNode = { value, leftNode: null, rightNode: null };
        } else {
            this.insertNode(this.rootNode, value);
        }
    }

    private insertNode(node: Node<T>, value: T): void {
        if(value <= node.value) {
            this.insertToLeftNode(node, value);
        } else {
            this.insertToRightNode(node, value);
        }
    }

    private insertToLeftNode(node: Node<T>, value: T): void {
        if(node.leftNode === null) {
            node.leftNode = { value, leftNode: null, rightNode: null };
        } else {
            this.insertNode(node.leftNode, value);
        }
    }

    private insertToRightNode(node: Node<T>, value: T): void {
        if(node.rightNode === null) {
            node.rightNode = { value, leftNode: null, rightNode: null };
        } else {
            this.insertNode(node.rightNode, value);
        }
    }
}
