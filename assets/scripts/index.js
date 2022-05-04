const textareaelement = document.getElementById('textBox')
const btnElement = document.getElementById('btnCountWords')
const wordCountElement = document.getElementById('wordCount')

btnElement.addEventListener('click', () => {
    /* console.log(textareaelement.value); */

    let wordCount;

    if (textareaelement.value.length < 1 || textareaelement.value === " ") {
        wordCount = '0';
    } else {
        wordCount = textareaelement.value.split(" ").length
    }    
    
    wordCountElement.innerText = wordCount;
});