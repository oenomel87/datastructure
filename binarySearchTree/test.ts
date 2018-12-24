import BST from './BinarySearchTree';

const bst = new BST<Number>(10);
bst.insert(5);
bst.insert(20);
bst.insert(3);
bst.insert(22);
bst.insert(15);
bst.insert(2);
bst.insert(3);

console.log(bst.findMin());
console.log(bst.findMax());

bst.insert(1);
bst.insert(30);

console.log(bst.findMin());
console.log(bst.findMax());