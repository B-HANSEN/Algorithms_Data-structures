class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(val) {
		var newNode = new Node(val);
		if (!this.first) {
			// edge case: if queue is empty
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode; // link current last item to new node
			this.last = newNode; // move last pointer to the new node at the end
		}
		return ++this.size;
	}
	dequeue() {
		if (!this.first) return null;

		var temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value; // return the removed value
	}
}

// Big O notation:
// insertion: O(1)
// removal: O(1)
// searching: O(n) // traverse entire stack, rather use array
// accessing: O(n) // traverse entire stack, rather use array
// FIFO data structure: print and task queues, background tasks, uploading resources (can be parallel)
