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
	insert(value) {
		var newNode = new Node(value);
		if (this.root === null) {
			// if there is no root
			this.root = newNode; // the new value becomes the root
			return this;
		}
		var current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					// if there is no left, place the new value
					current.left = newNode; // if value is not yet in the tree, create it
					return this; // retiurn to break out of the loop
				}
				current = current.left; // if there is a left, update current and continue traversing
			} else {
				if (current.right === null) {
					current.right = newNode; // if value is not yet in the tree, create it
					return this;
				}
				current = current.right;
			}
		}
	}
	find(value) {
		if (this.root === null) return false;
		var current = this.root,
			found = false;
		while (current && !found) {
			if (value < current.value)
				current =
					current.left; // update current, continue traversing on left side
			else if (value > current.value)
				current =
					current.right; // update current, continue traversing on right side
			else found = true;
		}
		if (!found) return undefined;
		return current;
	}
	contains(value) {
		if (this.root === null) return false;
		var current = this.root,
			found = false;
		while (current && !found) {
			if (value < current.value) current = current.left;
			else if (value > current.value) current = current.right;
			else return true;
		}
		return false; // same as find, just return boolean
	}
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

// use cases: HTML DOM, network routing, abstract syntax tree, artifical intelligence,
// folders in operating systems, computer file systems

// Big O notation (best and average case):
// insertion: O(log n)
// searching: O(log n)
