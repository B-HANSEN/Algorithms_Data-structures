class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	Dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {}; // storage for quickest path
		let path = []; // to return at end
		let smallest;
		// build up initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0; // no weight for starting node
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity; // maximise initial value of every other node
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null; // set path to [ null, null etc... ]
		}

		while (nodes.values.length) {
			// as long as there is something in the queue
			smallest = nodes.dequeue().val; // { val: "A", priority: 0 }
			if (smallest === finish) {
				// WE ARE DONE
				while (previous[smallest]) {
					// BUILD UP PATH TO RETURN AT END
					path.push(smallest);
					smallest = previous[smallest];
				}
				break; // break to avoid empty loop
			}
			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					// find neighboring node
					let nextNode = this.adjacencyList[smallest][neighbor];
					// calculate new distance to neighboring node
					let candidate = distances[smallest] + nextNode.weight; // new sum
					let nextNeighbor = nextNode.node; // nextNode, e.g. { node: "F", weight: 3 }
					if (candidate < distances[nextNeighbor]) {
						// compare to what is currently stored
						// updating new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						// updating previous - How we got to neighbor
						previous[nextNeighbor] = smallest;
						// enqueue in priority queue with new priority
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}
		return path.concat(smallest).reverse(); // get "A" in at the end and reverse the array
	}
}

class PriorityQueue {
	// a binary heap
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}
	dequeue() {
		const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
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

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.Dijkstra('A', 'E');
