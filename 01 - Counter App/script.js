let dec = document.querySelector('.decrease');
let inc = document.querySelector('.increase');
let reset = document.querySelector('.reset');
let counter = document.querySelector('.counter');

let count = 0;

const MAX = 10;
const MIN = -10;

inc.addEventListener('click', ()=>{
  if (count < MAX){
    count++;
  }
  updateCount();
});

dec.addEventListener('click', ()=>{
  if (count > MIN) count--;
  updateCount();
});

reset.addEventListener('click', ()=>{
    count = 0;
    updateCount();
});

function updateCount(){
  counter.textContent = count;

  if(count > 0) counter.style.color = "Green";
  else if(count === 0) counter.style.color = "Black";
  else {
    counter.style.color = "Red";
  }

  if (count === MAX)
    inc.disabled = true;
  else
    inc.disabled = false;

  if (count === MIN)
    dec.disabled = true;
  else
    dec.disabled = false;
}