const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")
const maxLengthEl = document.getElementById("maxlength")

textareaEl.addEventListener("keyup", ()=> {
    updateCounter()
});

maxLengthEl.addEventListener("change", ()=>{
    textareaEl.setAttribute("maxLength", maxLengthEl.value)
    updateCounter()
});

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length
}