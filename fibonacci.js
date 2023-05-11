// DYNAMIC PROGRAMMING

// FIBONACCI RECURSIVELY (non-performant solution):
const fib = n => {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
};

fib(7);
fib(3);
fib(4); // fib(3) + fib(2) = fib(2)+fib(1) + 1
//     1   +  1    + 1

// Big O notation: 2^n; really bad performance
// browser would possibly crash with fib(100)

// TOP-DOWN APPROACH: FIBONACCI MEMOIZED
const fibOpt = (n, memo = []) => {
	// alt: memo=[undefined, 1, 1] and remove base case
	if (memo[n] !== undefined) return memo[n]; // check if already calculated
	if (n <= 2) return 1; // base case

	let res = fib(n - 1, memo) + fib(n - 2, memo); // calculate the value
	memo[n] = res; // save that value in the array
	return res;
};

// Big O notation: O(n), huge improvement
// however not space-efficient; at some point call stack size will be exceeded returning error

// BOTTOM-UP APPROACH: FIBONACCI TABULATED
const fibOpt2 = n => {
	if (n <= 2) return 1;
	let fibNums = [0, 1, 1]; // initialising at the bottom

	for (let i = 3; i <= n; i++) {
		// filling up towards the end
		fibNums[i] = fibNums(i - 1) + fibNums[i - 2];
	}
	return fibNums[n];
};

// Big O notation: O(n), huge improvement
// space complexity is better than the memoized version
