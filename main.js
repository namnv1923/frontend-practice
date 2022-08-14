const mobileBtn = document.querySelector('.menu-button');
const navMobile = document.querySelector('.navbar-mobile');
const closeBtn = document.querySelector('.control-back img');

mobileBtn.onclick = function() {
    navMobile.style.display = 'block';
}

closeBtn.onclick = function() {
    navMobile.style.display = 'none';
}