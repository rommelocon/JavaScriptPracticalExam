function solution(blocks) {
	const N = blocks.length;
	const lis = new Array(N).fill(1); // Initialize LIS array with 1s

	// Find the length of the LIS
	for (let i = 1; i < N; i++) {
		for (let j = 0; j < i; j++) {
			if (blocks[i] >= blocks[j] && lis[i] < lis[j] + 1) {
				lis[i] = lis[j] + 1;
			}
		}
	}

	// Find the maximum value in the LIS array
	let maxDistance = Math.max(...lis);

	return maxDistance;
}

console.log(solution([2, 6, 8, 5])); // Output: 3
console.log(solution([1, 5, 5, 2, 6])); // Output: 4
