let burger = document.querySelector('#header__burger');
let menu = document.querySelector('.content__sidebar');

burger.addEventListener('click', function(event){
  event.preventDefault();
  menu.classList.toggle('active');
  burger.classList.toggle('active');
})
