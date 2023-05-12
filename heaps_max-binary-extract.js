// MAX BINARY HEAP - extract
// parent nodes are always larger than child nodes
// usually extract the root, procedure for deleting the root from the heap and restoring the properties: down-heap

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	extractMax() {
		const max = this.values[0]; // extract root
		const end = this.values.pop(); // pop off last item
		if (this.values.length > 0) { // require conditional, otherwise pop off and reset it back in after that
			this.values[0] = end; // put last item into root
			this.sinkDown(); // then sink down
		}
		return max; // return new max
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) { // check if in bounds
				leftChild = this.values[leftChildIdx];
				if (leftChild > element) swap = leftChildIdx;
			}
			if (rightChildIdx < length) { // check if valid index
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild) // need to swap with the larger child node
				) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap]; // [swap] is left or right child index; move up the bigger child
			this.values[swap] = element; // put the element into the swap position of the right child
			idx = swap; // continue at the swap position
		}
	}
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

// binary heap: similar to BST, but no order
// maxBinaryHeap: parent nodes larger than child nodes
// minBinaryHeap: parent nodes smaller than child nodes

// Big O notation:
// Insertion: O(log n)
// Removal: O(log n)
// Search: O(n)
