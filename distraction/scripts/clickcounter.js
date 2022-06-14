const countButton = document.querySelector('.countButton button');
const refreshButton = document.querySelector('.refreshButton button')
let countNum = document.querySelector('.countNum h1');

countButton.addEventListener('click', addClick);
refreshButton.addEventListener('click', refresh);

function addClick(){
    countNum.innerHTML++;
}

function refresh(){
    countNum.innerHTML = 0;
}