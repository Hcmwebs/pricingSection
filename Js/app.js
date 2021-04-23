const toggleBtn = document.getElementById('toggleBtn');
const cards = document.querySelectorAll('.card');


let current = 0;

toggleBtn.addEventListener('click',() =>{
  toggleBtn.classList.toggle('isActive');
})

