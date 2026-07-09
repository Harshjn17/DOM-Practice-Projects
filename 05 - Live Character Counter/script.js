let text = document.querySelector('#text');
let countText = document.querySelector('#text-count');
let maxCharacter = document.querySelector('#max-char');

let max = 200;
maxCharacter.textContent = max;

text.addEventListener('input', ()=>{
  let textVal = text.value;
  countText.textContent = textVal.length;
  
  let remainingCount = max - textVal.length;
  if(remainingCount === 0) {
    text.style.color = 'red';
  } else if(remainingCount <= 20){
    text.style.color = 'orange';
  } else {
    text.style.color = '#000';
  }
  maxCharacter.textContent = remainingCount;
});