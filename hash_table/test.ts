import HashTable from './HashTable';

const table = new HashTable();
table.put('a', 'aaa');
table.put('bb', 'b');
table.put('aa', 'aaaa');
table.put('c', 'ccc');

table.print();
console.log(table.get('aa'));
table.put('aa', 'aa');
console.log(table.get('aa'));

console.log(table.get('bb'));
table.remove('bb');
console.log(table.get('bb'));