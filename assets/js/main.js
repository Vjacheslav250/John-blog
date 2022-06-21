let menuIcon = document.querySelector('.menu__icon');
let menuList = document.querySelector('.menu__list');
menuIcon.addEventListener('click', function () {
  menuIcon.classList.toggle('active');
  menuList.classList.toggle('active');
})