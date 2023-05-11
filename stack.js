class Node {
	constructor(value) {
		this.value = value;
		this.next = null; // pointer to next node
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0; // length of stack
	}
	push(val) {
		// corresponds to unshift with arrays
		var newNode = new Node(val);
		if (!this.first) {
			// case empty list
			this.first = newNode;
			this.last = newNode;
		} else {
			var temp = this.first; // add to beginning
			this.first = newNode; // set new first
			this.first.next = temp; // set connection to second
		}
		return ++this.size; // first update/increase, then return
	}
	pop() {
		// corresponds to shift with arrays
		if (!this.first) return null;
		var temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next; // second item to be head of the new list
		this.size--;
		return temp.value; // return removed item
	}
}

// Big O notation:
// insertion: O(1)
// removal: O(1)
// searching: O(n) // traverse entire stack, rather use array
// accessing: O(n) // traverse entire stack, rather use array
// LIFO data structure: undo/ redo, for routing (remember pages)
