//global variables

const listOfSections = document.querySelectorAll('section');
const ulNav = document.getElementById('navbar__list');
const listOfli = document.querySelectorAll('li');



//build naviagation menu

const ulFragment = document.createDocumentFragment();

listOfSections.forEach((elem) => {
let liElement = document.createElement('li');
liElement.classList.add('menuLink');
liElement.textContent = elem.dataset.nav;
// Scroll to section on link click
liElement.addEventListener('click',() => {
    elem.scrollIntoView({
        behavior : "smooth"
    })
})
ulFragment.appendChild(liElement);
});

ulNav.appendChild(ulFragment);


//set as active

let options = {
    threshold : 0.3
}
// to observe every section element
let observer = new IntersectionObserver(callback,options);
listOfSections.forEach(section => {
    observer.observe(section);
});
// to loop sections and add 'activeSection' class when intersecting.
// if no intersection remove the class 
function callback(enteries){
    enteries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('activeSection');
        }else{
            entry.target.classList.remove('activeSection')
        }
    });
};