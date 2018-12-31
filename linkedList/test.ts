import LinkedList from './LinkedList';

const list = new LinkedList<number>();
list.add(1);
list.add(3);
list.add(2);
list.add(4);

console.log(list.size());
list.remove(5);
console.log(list.size());
list.remove(4);
console.log(list.size());
console.log(list.indexOf(4));
console.log(list.indexOf(2));
list.remove(3);
console.log(list.indexOf(2));