const itemsRef = document.querySelector('ul#categories');
const listItems = itemsRef.children;

const arr = [...listItems];
console.log('Number of categories:', listItems.length);

arr.forEach(el => {
  const item = el.firstElementChild.textContent;
  const itemQty = el.lastElementChild.children.length;
  console.log(`Category: ${item}`);
  console.log('Elements:', itemQty);
});

// =================================================

const listArrRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${listArrRef.length}`);

listArrRef.forEach(elem => {
  const itemTitleRef = elem.querySelector('h2');
  const innerArrRef = elem.querySelectorAll('.item li');
  console.log(`Category: ${itemTitleRef.textContent}`);
  console.log(`Elements: ${innerArrRef.length}`);
});
