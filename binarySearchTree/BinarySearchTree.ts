import Node from './Node';

export default class BinarySearchTree<T> {
    private rootNode: Node<T> | null = null;

    public find(value: T): boolean {
        return this.findNode(this.rootNode, value) ? true : false;
    }

    private findNode(node: Node<T> | null, value: T): Node<T> | null {
        if(!node) {
            return null;
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
            this.rootNode = new Node<T>(value, null);
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
            node.leftNode = new Node<T>(value, node);
        } else {
            this.insertNode(node.leftNode, value);
        }
    }

    private insertToRightNode(node: Node<T>, value: T): void {
        if(node.rightNode === null) {
            node.rightNode = new Node<T>(value, node);;
        } else {
            this.insertNode(node.rightNode, value);
        }
    }

    public remove(value: T): void {
        const node: Node<T> | null = this.findNode(this.rootNode, value);

        if(!node) {
            return;
        } else if(node.leftNode === null && node.rightNode === null) {
            this.removeNode(node);
        } else if(node.leftNode !== null && node.rightNode !== null) {
            if(node.rightNode.leftNode !== null) {
                node.value = node.rightNode.leftNode.value;
                
            }
        } else {
            if(node.leftNode) {
                node.parentNode!.leftNode = node.leftNode;
            } else {
                node.parentNode!.rightNode = node.rightNode;
            }
        }
    }

    private removeNode(node: Node<T>): void {
        if(node.parentNode === null) {
            return;
        } else if(node.isLeftNode()) {
            node.parentNode.leftNode = null;
        } else if(node.isRightNode()) {
            node.parentNode.rightNode = null;
        }
    }
}
