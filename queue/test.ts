import PriorityQueue from './PriorityQueue';

const pq = new PriorityQueue<string>();
pq.enqueue({ value: 'a', prioirty: 1 });
pq.enqueue({ value: 'b', prioirty: 4 });
pq.enqueue({ value: 'c', prioirty: 2 });
pq.enqueue({ value: 'd', prioirty: 3 });
pq.enqueue({ value: 'e', prioirty: 1 });
pq.enqueue({ value: 'f', prioirty: 2 });

pq.print();
pq.dequeue();
pq.dequeue();
pq.print();
