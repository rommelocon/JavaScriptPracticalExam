const cryptoListElement = document.getElementById('cryptoList');
const loadingIndicator = document.getElementById('loadingIndicator');
const endMessage = document.getElementById('endMessage');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

let page = 1;
let isLoading = false;

const fetchData = async (searchQuery = '') => {
	if (isLoading) return;

	isLoading = true;
	loadingIndicator.style.display = 'block';

	try {
		const response = await fetch(
			`https://api.coingecko.com/api/v3/exchange_rates?page=${page}`
		);
		if (!response.ok) {
			throw new Error(
				`Network response was not ok (status ${response.status})`
			);
		}
		const data = await response.json();

		if (data && data.rates && typeof data.rates === 'object') {
			const cryptoRates = Object.values(data.rates);
			const filteredCryptoRates = cryptoRates.filter((crypto) =>
				crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
			);
			filteredCryptoRates.forEach((crypto) => {
				const cryptoItem = document.createElement('div');
				cryptoItem.classList.add('cryptoItem');
				cryptoItem.innerHTML = `
                    <div style="padding-right:5px;"><img src="${crypto.image}" width="70" height="70" /></div>
                    <div style="width:200px; border: 1px solid white; padding:5px;">
                    <div>Rate: ${crypto.rate}</div>
                    <div>Crypto Name: ${crypto.name}</div>
                    <div>Crypto Unit: ${crypto.unit}</div>
                    </div>
                `;
				cryptoListElement.appendChild(cryptoItem);
			});
			page++;
		} else {
			endMessage.style.display = 'block';
		}
	} catch (error) {
		console.error('Error fetching data:', error);
	}

	isLoading = false;
	loadingIndicator.style.display = 'none';
};

const searchCrypto = () => {
	cryptoListElement.innerHTML = '';
	page = 1;
	fetchData(searchInput.value);
};

// Lazy-load data as the user scrolls down
window.addEventListener('scroll', () => {
	const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
	if (scrollTop + clientHeight >= scrollHeight - 100) {
		fetchData(searchInput.value);
	}
});

// Search button click event
searchButton.addEventListener('click', searchCrypto);

// Enter key press event in the search input
searchInput.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		searchCrypto();
	}
});

// Initial data load
fetchData();
