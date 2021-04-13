const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')
console.dir(spanEl)

inputEl.addEventListener('input', changeTextFontSize); 


console.log(spanEl.style.fontSize)

function changeTextFontSize(event) {    
    
    return spanEl.style.fontSize = event.currentTarget.value + "px";
    
}