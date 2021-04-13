const liEl = document.querySelectorAll('.item');
console.log(`В списке ${liEl.length} категории.`);

liEl.forEach(el => {
    const headerEl = el.querySelector('.item h2');
    const amountEl = el.querySelector('ul').children.length;    
    console.log(`- Категория: ${headerEl.textContent}`);
    console.log(`- Количество элементов: ${amountEl} `);
});













    

