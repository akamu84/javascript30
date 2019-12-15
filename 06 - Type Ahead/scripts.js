const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const searchInput = document.querySelector('.search');
const suggestionList = document.querySelector('.suggestions');

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  const regex = new RegExp(wordToMatch, 'gi');
  return cities.filter(location => location.city.match(regex) || location.state.match(regex));
}

function resetSuggestions() {
  const html = `
        <li>Filter for a city</li>
        <li>or a state</li>
      `;
  suggestionList.innerHTML = html;
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  if (!this.value) {
    resetSuggestions();
    return;
  }

  const filteredCities = findMatches(this.value, cities);
  const html = filteredCities
    .map(location => {
      const regex = new RegExp(this.value, 'gi');
      const cityHighlight = location.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateHighlight = location.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
          <li>
            <span class="name">${cityHighlight}, ${stateHighlight}</span>
            <span class="population">${formatNumber(location.population)}</span>
          </li>
        `;
    })
    .join('');
  suggestionList.innerHTML = html;
}

searchInput.addEventListener('input', displayMatches);
