import MySet from './MySet';

const a = new MySet<string>();
const b = new MySet<string>();

a.add('a').add('f');
b.add('c');
b.add('t');
b.add('a');
b.add('c');
b.add('e');
b.add('f');

console.log(a.intersection(b));
console.log(a.difference(b));
console.log(a.isSubset(b));

console.log(b.values());
b.remove('e');
console.log(b.values());
