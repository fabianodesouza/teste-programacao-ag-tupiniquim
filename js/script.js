//Ativando o link ao rolar o scroll
const links = document.querySelectorAll('.link-menu')
const sections = document.querySelectorAll('.section')

window.addEventListener('scroll', () => {

    // console.log('scroll')

    sections.forEach(section => {

        let top = scrollY
        let offset = section.offsetTop
        let heightSection = section.offsetHeight
        let sectionId = section.getAttribute('id')

        // console.log(sectionId)

        if(top >= offset && top < offset + heightSection) {

            links.forEach(link => {

                link.classList.remove('selecionado')

                document.querySelector(`header nav a[href*="${sectionId}"]`).classList.add('selecionado')
            })
        }
    })
})

// marcando link da pagina que estiver sendo visitada
function scrollSection(event) {

    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')

    const section = document.querySelector(href)
    
    let topSection = section.offsetTop

    window.scrollTo({

        top: topSection,
        behavior: 'smooth'
    })
}

links.forEach(link => {

    link.addEventListener('click', scrollSection)
})

//SCROLL REVEAL
ScrollReveal({ 
    
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 200 

});


ScrollReveal().reveal('.box-drivers-text, .contact', { origin: 'left' });
ScrollReveal().reveal('.passengers', { origin: 'top' });
ScrollReveal().reveal('.box-about-text, .box-contact-text', { origin: 'right' });


//MENU MOBILE
const btnMenu = document.getElementById('btn_menu_mobile')
const menuMobile = document.getElementById('menu-mobile')
const overlay = document.getElementById('overlay-mobile')

btnMenu.addEventListener('click', () => {

    menuMobile.classList.add('abrir-menu')
})

menuMobile.addEventListener('click', () => {

    menuMobile.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {

    menuMobile.classList.remove('abrir-menu')
})
