// Hash tables: separate chaining solution
// storing together key-value pairs in same array index in a nested structure

class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}
	set(key, value) {
		let index = this._hash(key);
		if (!this.keyMap[index]) this.keyMap[index] = []; // if there is no array yet, create one!
		this.keyMap[index].push([key, value]); // push an array item into this array, nest it
	}
	get(key) {
		let index = this._hash(key); // hash key provided to get an index
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1]; // return value [i][1] of sub-array
			}
		}
		return undefined;
	}
	keys() {
		let keysArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!keysArr.includes(this.keyMap[i][j][0])) {
						keysArr.push(this.keyMap[i][j][0]);
					}
				}
			}
		}
		return keysArr;
	}
	values() {
		let valuesArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!valuesArr.includes(this.keyMap[i][j][1])) {
						// if table does not include the value, push it into the array
						valuesArr.push(this.keyMap[i][j][1]); // return only unique and no duplicate values
					}
				}
			}
		}
		return valuesArr;
	}
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('purple', '#DDA0DD');
ht.set('violet', '#DDA0DD');

ht.keys().forEach(function (key) {
	console.log(ht.get(key));
});

// Hash tables are collections of key-value pairs
// Can find values quickly given a key
// can add new key-values quickly
// store data in large array, and work by hashing the keys
// good hash should be fast, distribute keys uniformly, and be deterministic

// Big O notation:
// Insert: O(1)
// Deletion: O(1)
// Access: O(1)
