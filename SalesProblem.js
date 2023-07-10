var productProfitArray = [
	{ name: 'Product A', profit: -75 },
	{ name: 'Product B', profit: -70 },
	{ name: 'Product C', profit: 98 },
	{ name: 'Product D', profit: 5 },
	{ name: 'Product E', profit: 88 },
	{ name: 'Product F', profit: 29 },
];

function topProduct(productProfitArray) {
	if (productProfitArray.length === 0) {
		return 'No data';
	} else {
		var maxObj = productProfitArray.reduce(function (max, obj) {
			return obj.profit > max.profit ? obj : max;
		});
		return maxObj;
	}
}

function bottomProduct(productProfitArray) {
	if (productProfitArray.length === 0) {
		return 'No data';
	} else {
		var maxObj = productProfitArray.reduce(function (max, obj) {
			return obj.profit < max.profit ? obj : max;
		});
		return maxObj;
	}
}

function zeroProfitProduct(productProfitArray) {
	if (productProfitArray.length === 0) {
		return 'No data';
	} else {
		var maxObj = productProfitArray.reduce(function (max, obj) {
			var diffMax = Math.abs(max.profit - 0);
			var diffCurrObj = Math.abs(obj.profit - 0);
			return diffCurrObj < diffMax ? obj : max;
		});
		return maxObj;
	}
}

console.log(topProduct(productProfitArray));
console.log(bottomProduct(productProfitArray));
console.log(zeroProfitProduct(productProfitArray));
