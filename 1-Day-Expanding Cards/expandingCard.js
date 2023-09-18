

const first = document.querySelector('.one')
const second = document.querySelector('.two')
const third = document.querySelector('.three')
const fourth = document.querySelector('.four')
const fifth = document.querySelector('.five')

const firstH3 = document.querySelector('.one h3')
const secondH3 = document.querySelector('.two h3')
const thirdH3 = document.querySelector('.three h3')
const fourthH3 = document.querySelector('.four h3')
const fifthH3 = document.querySelector('.five h3')

first.addEventListener('click', oneClick)
second.addEventListener('click', twoClick)
third.addEventListener('click',threeClick)
fourth.addEventListener('click',fourClick)
fifth.addEventListener('click', fiveClick)

oneClick()

function oneClick () {

    inactiveOthers()
    first.classList.add('divActive')
    firstH3.classList.add('subtitle')
}

function twoClick () {

    inactiveOthers()
    second.classList.add('divActive')
    secondH3.classList.add('subtitle')
}

function threeClick () {
    inactiveOthers()
    third.classList.add('divActive')
    thirdH3.classList.add('subtitle')
    
}

function fourClick () {
   
    inactiveOthers()
    fourth.classList.add('divActive')
    fourthH3.classList.add('subtitle')
}

function fiveClick () {
  
    inactiveOthers()
    fifth.classList.add('divActive')
    fifthH3.classList.add('subtitle')
}


function inactiveOthers(){

    first.classList.remove('divActive')
    second.classList.remove('divActive')
    third.classList.remove('divActive')
    fourth.classList.remove('divActive')
    fifth.classList.remove('divActive')

    firstH3.classList.remove('subtitle')
    secondH3.classList.remove('subtitle')
    thirdH3.classList.remove('subtitle')
    fourthH3.classList.remove('subtitle')
    fifthH3.classList.remove('subtitle')
}

function clickP (){
    console.log('click prueba')
}
