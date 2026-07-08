let btn = document.querySelector('#btn');
let colorText = document.querySelector('#color');
let copy = document.querySelector('#copy');
let body = document.body;
let box = document.querySelector('.box');

const hex = "0123456789ABCDEF";

let history = [];

function generateColor() {
  let color = '#';
  for(let i = 0; i < 6; i++){
    const random = Math.floor(Math.random() * hex.length);
    color += hex[random];
  }
  body.style.backgroundColor = color;
  colorText.textContent = color;
  
  if(history.length >= 5){
    history.shift();
  } else {
    history.push(colorText.textContent);
  }
}

btn.addEventListener('click', ()=>{
  generateColor();
});

copy.addEventListener('click', ()=>{
  navigator.clipboard.writeText(colorText.textContent);
  copy.textContent = 'Copied!';
});

document.addEventListener('keydown', (e)=>{
  if (e.code === 'Space') {
    generateColor();
  }
});