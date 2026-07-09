let text = document.querySelector('#text');

window.addEventListener('keydown', function(dets){
    if (dets.key === " ") text.textContent = "SPC";
    else text.textContent = dets.key;
})
