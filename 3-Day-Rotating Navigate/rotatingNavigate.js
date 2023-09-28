
const navigator = document.querySelector('.navigator')
const btnMenu = document.querySelector('.menuIcon')
const btnClose = document.querySelector('.closeIcon')

const sectionContent = document.querySelector('.content')

const lateralBar = document.querySelector('.lateralBar')


btnMenu.addEventListener('click', openMenu)
btnClose.addEventListener('click', closeMenu)

function openMenu () {
    navigator.classList.remove('rotateClose')
    lateralBar.classList.remove('lateralBarClose')
    sectionContent.classList.remove('rotateContentClose')

    sectionContent.classList.add('rotateContentOpen')
    navigator.classList.add('rotateOpen')
    lateralBar.classList.add('lateralBarOpen')
}

function closeMenu (){
    
    navigator.classList.add('rotateClose')
    sectionContent.classList.add('rotateContentClose')
    lateralBar.classList.add('lateralBarClose')

    sectionContent.classList.remove('rotateContentOpen')
    navigator.classList.remove('rotateOpen')
    lateralBar.classList.remove('lateralBarOpen')
}