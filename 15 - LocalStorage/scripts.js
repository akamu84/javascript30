const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function populateList(items = [], itemsList) {
  itemsList.innerHTML = items
    .map(
      (item, i) => `
            <li>
            <input type="checkbox" data-index="${i}" id="item${i}" ${item.done && 'checked'} />
            <label for="item${i}">${item.text}</label>
            </li>
            `
    )
    .join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  items[e.target.dataset.index].done = !items[e.target.dataset.index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
