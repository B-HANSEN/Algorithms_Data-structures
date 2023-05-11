class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		var poppedNode = this.tail;
		if (this.length === 1) {
			// empty the list
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev; // set the second last item to be the new tail
			this.tail.next = null; // remove this linkage to the severed node
			poppedNode.prev = null; // remove this linkage from the severed node, avoid lingering connections
		}
		this.length--;
		return poppedNode;
	}
	shift() {
		if (this.length === 0) return undefined;
		var oldHead = this.head;
		if (this.length === 1) {
			// to empty the list
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next; // make the second item the new head
			this.head.prev = null; // sever the link from new head
			oldHead.next = null; // sever the link from old head
		}
		this.length--;
		return oldHead;
	}
	unshift(val) {
		var newNode = new Node(val);
		if (this.length === 0) {
			// in case empty list, head and tail to be same and new node
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode; // create new node
			newNode.next = this.head; // setup link from newNode to existing head
			this.head = newNode; // move head forward
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null; // edge case
		var count, current;
		if (index <= this.length / 2) {
			// loop through the first half
			count = 0;
			current = this.head; // start at the beginning
			while (count !== index) {
				current = current.next; // traverse through the list
				count++; // increase count until it matches with the index to search forward
			}
		} else {
			// loop through the second half
			count = this.length - 1;
			current = this.tail; // start at the end
			while (count !== index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}
	set(index, val) {
		var foundNode = this.get(index);
		if (foundNode != null) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);

		var newNode = new Node(val);
		var beforeNode = this.get(index - 1); // previous node before to insert
		var afterNode = beforeNode.next; // new node

		(beforeNode.next = newNode), (newNode.prev = beforeNode); // group pair of connections (optional)
		(newNode.next = afterNode), (afterNode.prev = newNode);
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		var removedNode = this.get(index);
		var beforeNode = removedNode.prev;
		var afterNode = removedNode.next;
		beforeNode.next = afterNode; // resetting links between remaining surrounding nodes
		afterNode.prev = beforeNode;
		// removedNode.prev.next = removedNode.next;  // alternative code
		// removedNode.next.prev = removedNode.prev;
		removedNode.next = null; // remove lingering connections
		removedNode.prev = null;

		this.length--;
		return removedNode;
	}
}

var list = new DoublyLinkedList();
list.push('Harry');
list.push('Ron');
list.push('Hermione');

// Big O notation:
// insertion: O(1)
// removal: O(1) // different than singly linked list
// searching: O(n) // arrays better (technically O(n/2))
// accessing: O(n) // arrays better

// almost same as singly linked lists
// additional pointer, more memory, half time to find nodes
