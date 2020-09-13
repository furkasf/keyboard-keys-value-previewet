const chars = document.getElementById('keys');
const printChars = (n) => document.querySelector('#keys').value = n;//print function

chars.addEventListener('keydown', (e) =>{
    let keyCode = e.keyCode;
    let keyValue = e.location;
    let metachar = e.metaKey
    document.querySelector('#key-value').innerHTML = `key code: ${keyCode} location: ${keyValue} metachar: ${metachar}`
    printChars('')//prevent to much char on input box and focusing one char
    let body = document.querySelector('body');
    body.style.background =  `rgba(60,${keyCode},${keyValue})`;
});

