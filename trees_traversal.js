class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	BFS() {
		// breadth first search, traverse horizontally --- breadth before depth
		var node = this.root,
			data = [], // array of visited nodes
			queue = [];
		queue.push(node); // place root node into the queue

		while (queue.length) {
			// as long as there is something in the queue
			node = queue.shift(); // take first item from queue
			data.push(node.value); // push it into the array
			if (node.left) queue.push(node.left); // add left children to the queue
			if (node.right) queue.push(node.right); // add right children to the queue
		}
		return data;
	}
	DFSPreOrder() {
		// depth first search --- traverse left side first, then right
		var data = []; // array of visited nodes
		function traverse(node) {
			data.push(node.value); // when visiting node, push it directly to array
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
	DFSPostOrder() {
		// depth first search --- traverse children first, left to right, upwards
		var data = [];
		function traverse(node) {
			if (node.left) traverse(node.left); // explore left
			if (node.right) traverse(node.right); // explore right
			data.push(node.value); // push the explored left and right value into array
		}
		traverse(this.root);
		return data;
	}
	DFSInOrder() {
		// depth first search --- leaf first, then parent, then right side
		var data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();

// trees: non-linear data structures containing root and child nodes

// time complexity same regardless if breadth or depth first -- every node visited once
// space complexity depends on tree structure
// if tree wider than deep, then depth search is better space-wise
// if tree deeper than wider, then breadth search is better space-wise

// DFSInOrder: [3,6,8,10,15,20] used commonly with BST; all nodes in tree returned in underlying DFSInOrder
// DFSPreOrder: [10,6,3,8,15,20] when trying to clone or duplicate a tree, to store in a file or database; order to easily reconstruct a tree
// more focus on BFS vs DFS, rather than the minor difference between in order or pre order
