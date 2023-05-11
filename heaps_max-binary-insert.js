class MaxBinaryHeap {
	constructor() {
		this.values = []; // store heap here
	}
	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2); // find parent
			let parent = this.values[parentIdx];
			if (element <= parent) break; // element in correct position
			this.values[parentIdx] = element; // assigning the higher value
			this.values[idx] = parent; // assigning the lower value
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
