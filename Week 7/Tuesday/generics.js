var list = new LinkedList();
list.add(1); // [1]
list.add(2); // [1,2]
list.add(3); // [1,2,3]
list.add(4); // [1,2,3,4]
list.addFirst(5); // [5,1,2,3,4]
console.log(list.toString()); // [5,1,2,3,4]
console.log(list.size); // 5
list.remove(); // [1,2,3,4]
console.log(list.toString()); // [1,2,3,4]
console.log(list.size); // 4
list.removeLast(); // [1,2,3]
console.log(list.toString()); // [1,2,3]
console.log(list.size); // 3
