var dynastyReign = [
	{ 'San Dynasty': 'MXLI' },
	{ 'Viloria Dynasty': 'MCCCIIII' },
	{ 'Tan Dynasty': 'MCCCXCVIII' },
	{ 'Bon Dynasty': 'MCDXLV' },
	{ 'Maiko Dynasty': 'MDCLXIV' },
	{ 'Paul Dynasty': 'MCMXLIX' },
	{ 'Andre Dynasty': 'MMMXICX' },
];

function longestDynasty(dynastyReign) {
	// Insert your code here
	let longest = '';

	for (let i = 0; i < dynastyReign.length; i++) {
		const dynastyName = Object.keys(dynastyReign[i])[0];
		if (dynastyName.length > longest.length) {
			longest = dynastyName;
		}
	}

	return longest;
	// call convertYear(year) in this code block
}

function convertYear(year) {
	// Insert validation
	const romanNumerals = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1,
	};

	let result = 0;
	let prevValue = 0;

	for (let i = year.length - 1; i >= 0; i--) {
		const currentValue = romanNumerals[year[i]];
		if (currentValue >= prevValue) {
			result += currentValue;
		} else {
			result -= currentValue;
		}
		prevValue = currentValue;
	}

	return result;
	// Insert your code here
}

console.log(longestDynasty(dynastyReign))