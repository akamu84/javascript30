const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

const articles = ['The', 'A', 'An'];

const bandsList = document.querySelector('#bands');

function strip(band) {
  const article = articles.find(article => band.toLowerCase().startsWith(`${article.toLowerCase} `));
  if (article) {
    return band.replace(article, '').trim();
  }
  return band;
}

const bandItems = bands
  .sort((bandA, bandB) => (strip(bandA) > strip(bandB) ? 1 : -1))
  .map(band => `<li>${band}</li>`)
  .join('');

bandsList.innerHTML = bandItems;
