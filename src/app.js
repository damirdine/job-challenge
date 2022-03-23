const items = document.querySelectorAll('.carrousel-img');
const nbSlide = items.length;
const suivant = document.querySelector('.fa-arrow-right');
const precedent = document.querySelector('.fa-arrow-left');
let count = 0;

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
const inputName =  document.querySelectorAll('input[type=text]');
const inputEmail = document.querySelector('input[type=mail]');
const rgpdCheck = document.querySelector('#rgpd');
const notice = document.querySelectorAll('.notice');
const submitButton = document.querySelector('button');
const namePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
const mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// NAME VALIDATION

submitButton.addEventListener('click', () => {
// name validation
     let result = namePattern.test(inputName[0].value);
     if (result==false){
        notice[0].classList.add("invalid"); 
     }else{
        notice[0].classList.remove("invalid"); 
     };
     let result1 = namePattern.test(inputName[1].value);
     if (result1==false){
         notice[1].classList.add("invalid"); 
     }else{
        notice[1].classList.remove("invalid"); 
     };
// mail validation
    let resultMail = mailPattern.test(inputEmail);
    if (resultMail==false){
        notice[2].classList.add("invalid"); 
    }else{
        notice[2].classList.remove("invalid"); 
     };
// rgdp validation

    if(document.querySelector('#rgpd').checked){
        notice[4].classList.remove("invalid")
    }else{
        notice[4].classList = 'invalid';
    }

})
