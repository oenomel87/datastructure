import Stack from "./Stack";

const stack = new Stack<string>();

stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');

console.log('stack length ', stack.length());

console.log('peek ', stack.peek());

console.log('stack length ', stack.length());

console.log('pop ', stack.pop());
console.log('pop ', stack.pop());

console.log('stack length ', stack.length());
