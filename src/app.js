const items = document.querySelectorAll('.carrousel-img');
const nbSlide = items.length;
const suivant = document.querySelector('.fa-arrow-right');
const precedent = document.querySelector('.fa-arrow-left');
let count = 0;
//console.log(items)
function slideSuivante(){
    items[count].classList.remove('active');
    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }
    items[count].classList.add('active')
}
suivant.addEventListener('click', slideSuivante)
function slidePrecedente(){
    items[count].classList.remove('active');
    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }
    items[count].classList.add('active')  
}
precedent.addEventListener('click', slidePrecedente)

// from required

const inputs =  document.querySelectorAll('input','textarea');

console.log()