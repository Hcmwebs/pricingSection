const toggleBtn = document.getElementById('toggleBtn');
const cards = document.querySelectorAll('.card');
const card = Array.from(cards);
const btns = document.querySelectorAll('.btn')

let current = 0;

toggleBtn.addEventListener('click',() =>{
  toggleBtn.classList.toggle('isActive');
})

