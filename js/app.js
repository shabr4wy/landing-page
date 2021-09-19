//global variables

const listOfSections = document.querySelectorAll('section');
const ulNav = document.getElementById('navbar__list');
const listOfli = document.querySelectorAll('li');



//build naviagation menu

const ulFragment = document.createDocumentFragment();

listOfSections.forEach(function(elem){
let liElement = document.createElement('li');
liElement.classList.add('menuLink');
liElement.textContent = elem.dataset.nav;
// Scroll to section on link click
liElement.addEventListener('click',function(){
    elem.scrollIntoView({
        behavior : "smooth"
    })
})
ulFragment.appendChild(liElement);
});

ulNav.appendChild(ulFragment);

