const inputEl = document.querySelector('input')

inputEl.addEventListener('change', changeInput);


function changeInput() {
    
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        return inputEl.classList.add('valid');        
    } 
    
    return inputEl.classList.add('invalid');    
}