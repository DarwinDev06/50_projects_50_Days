
const firstCircle = document.querySelector('.first-circle')
const secondCircle = document.querySelector('.second-circle')
const thirdCircle = document.querySelector('.third-circle')
const fourthCircle = document.querySelector('.fourth-circle')

const firstLine = document.querySelector('.first-line')
const secondLine = document.querySelector('.second-line')
const thirdLine = document.querySelector('.third-line')

const btnPrevious = document.querySelector('.btn-previous')
const btnNext = document.querySelector('.btn-next')

btnPrevious.addEventListener('click', previous)
btnNext.addEventListener('click', next)

let progress = 1;

previous()

function previous () {
    console.log('Previous', progress)
   
   
    switch (progress) {
        case 2:
            secondCircle.classList.remove('border-circle')
            firstLine.classList.remove('fill-line')
            console.log('no 2',progress)
            btnPrevious.disabled = true
            break;
        case 3:
            thirdCircle.classList.remove('border-circle')
            secondLine.classList.remove('fill-line')
            console.log('no 3',progress)
            break;
        case 4:

            fourthCircle.classList.remove('border-circle')
            thirdLine.classList.remove('fill-line')
            console.log('no 4',progress)
            btnNext.disabled = false
            break;
        default:
            firstCircle.classList.add('border-circle')
            console.log('no puede regresar',progress)
            btnPrevious.disabled = true
            break;
    }

    
    if(progress == 1){
        /* btnPrevious.disabled = true
        console.log('p',progress) */
        console.log('no puede regresar IF',progress)
        
    }else{
        
        -- progress 
    }

}

function next () {
    console.log('Netx', progress)
    ++ progress
    if(progress == 4){
        
        console.log('n',progress)
        console.log('Llegaste al maximo',progress)
    }else {
        
        
    }

    switch (progress) {
        case 2:
            firstLine.classList.add('fill-line')
            secondCircle.classList.add('border-circle')
            console.log('Llegaste 2',progress)
            btnPrevious.disabled = false
            break;
        case 3:
            secondLine.classList.add('fill-line')
            thirdCircle.classList.add('border-circle')
            console.log('Llegaste 3',progress)
            
            break;
        case 4:
            thirdLine.classList.add('fill-line')
            fourthCircle.classList.add('border-circle')
            console.log('Llegaste 4',progress)
            btnNext.disabled = true
            break;
        default:
            firstCircle.classList.add('border-circle')
            console.log('Llegaste al maximoD',progress)
            
            break;
    }
}