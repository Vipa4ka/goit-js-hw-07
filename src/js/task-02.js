const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const e = document.querySelector('ul');
const s = ingredients.map(el => {
    const r = (document.createElement('li'));
    r.textContent = el;    
    return r
});
e.append(...s);



