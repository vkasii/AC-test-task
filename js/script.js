// $(document).ready(function(){
//    $('.slider').slick()
// })

let dropdown = document.querySelector('.dropdown-item');
let dropdownMenu = document.querySelector('.header__dropdown_menu');

dropdown.addEventListener('click', function() {
   dropdownMenu.classList.toggle('active');
   document.querySelector('.dropdown-item').classList.toggle('active');
})

let toggleMenu = document.querySelector('.header__menu-toggle');
let header = document.querySelector('.header')
let headerNav = document.querySelector('.header__nav');
let body = document.querySelector('body');

toggleMenu.addEventListener('click', function() {
   toggleMenu.classList.toggle('active');
   headerNav.classList.toggle('active');
   header.classList.toggle('active');
   body.classList.toggle('lock');
})

let searchButton = document.querySelector('.header__serch-button');
let searchArea = document.querySelector('.search-area');
let cart = document.querySelector('.header__cart');
let closeSearchButton = document.querySelector('.close-search-button');

searchButton.addEventListener('click', function() {
   searchArea.classList.add('show');
   cart.classList.add('hide');
   closeSearchButton.classList.add('show');
})

closeSearchButton.addEventListener('click', function() {
   searchArea.classList.remove('show');
   closeSearchButton.classList.remove('show');
   cart.classList.remove('hide');
})

let faqDropdown = document.querySelectorAll('.dropdown-items');
let hiddenContent = document.querySelectorAll('.hidden-content');

faqDropdown.forEach(function(element, index) {
   element.addEventListener('click', function() {
      element.classList.toggle('active');
      hiddenContent[index].classList.toggle('show')
   })
})

let scrollToTop = document.querySelector('.scroll-to-top');

scrollToTop.addEventListener('click', function() {
   window.scrollTo(0, 0)
})



let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}