import Map from './Map';

const map = new Map<String, String>();
map.put('a','aaa');
map.put('b','bb');
map.put('c','ccc');

console.log(map);

map.put('b', 'bbb');
console.log(map.get('b'));
map.delete('b');
console.log(map.has('b'));
