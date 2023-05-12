// MAX BINARY HEAP - insert
// parent nodes are always larger than child nodes

class MaxBinaryHeap {
	constructor() {
		this.values = []; // store heap here
	}
	insert(element) {
		this.values.push(element); // first step: add the new element to the end
		this.bubbleUp(); // second step: bubble it up when required
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2); // find parent, standard heap logic
			let parent = this.values[parentIdx];
			if (element <= parent) break; // element in correct position

			// effect the change of positions
			this.values[parentIdx] = element; // assigning new element to the higher position
			this.values[idx] = parent; // assigning the lower value to the lower position
			idx = parentIdx; // move upwards, compare now with next parent
		}
	}
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
