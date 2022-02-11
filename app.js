const menuItens = document.querySelectorAll('.menu a, .menu-mobile a')

menuItens.forEach(item => {
    item.addEventListener('click', scrollClickSection)
})

function scrollClickSection(event){
    event.preventDefault()
    let element = event.target
    let id = element.getAttribute('href')
    let to = document.querySelector(id).offsetTop

    window.scroll({
        top: to,
        behavior: 'smooth',
    })
}

// Abrir-menu
const menu = document.querySelector('.menuMobile')

function openMenu(){
    const ul = document.querySelector('.ul')
    ul.classList.toggle('active')
}

menu.addEventListener('click', openMenu)