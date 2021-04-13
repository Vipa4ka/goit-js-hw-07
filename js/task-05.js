const inputEl = document.querySelector('#name-input')
const titleEl = document.querySelector('#name-output')
console.dir(inputEl)


inputEl.addEventListener('input', changeInput);

function changeInput(event) {    
    if (inputEl.value === ''){
        return titleEl.textContent = 'незнакомец'; 
    }
    
    return titleEl.textContent = event.currentTarget.value;    
}

