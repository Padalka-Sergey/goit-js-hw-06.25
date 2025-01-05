const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeList = ingredients.map(el => {
  const itemRef = document.createElement('li');
  itemRef.textContent = el;
  itemRef.classList.add('item');
  return itemRef;
});

const listRef = document.querySelector('#ingredients');
listRef.append(...makeList);

// const makeList = items => {
//   return items.map(element => {
//     const itemRef = document.createElement('li');
//     itemRef.textContent = element;
//     itemRef.classList.add('item');
//     return itemRef;
//   });
// };

// const listRef = document.querySelector('#ingredients');
// const arrRef = makeList(ingredients);
// console.log(arrRef);
// listRef.append(...arrRef);
