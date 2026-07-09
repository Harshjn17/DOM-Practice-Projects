let inp = document.querySelector('#input');
let showBtn = document.querySelector('#btn');

showBtn.addEventListener('click', ()=>{
  if (inp.type === 'password') {
    inp.type = 'text';
    showBtn.textContent = '🙈';
  } else {
    inp.type = 'password';
    showBtn.textContent = '👁️';
  }
})