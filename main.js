const navbarElement = document.querySelector('.navbar');
const headerContentContainer = document.querySelector('.header_content_container');

const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const menuMain = document.querySelector('.menu-main');
const menuSignUp = document.querySelector('.menu-signup');
const menuTitles = document.querySelectorAll('.menu-main_title');
const menuSections = document.querySelectorAll('.menu-main_section');
const menuItems = document.querySelectorAll('.menu-main_items');


// Pro rozlišení menší než 378px

window.addEventListener('load', () => {
    if(window.innerWidth < 378){
        const heightNavbar = window.getComputedStyle(navbarElement).height.replace('px', ''); // method returns an object containing the values of all CSS properties of an element 
        const heightContainer = window.innerHeight - heightNavbar;
        headerContentContainer.style.height = `${heightContainer}px`;
    }
});

const hamburgerIcon = '/images/icon-hamburger.svg';
const closeIcon = '/images/icon-close.svg';

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile');
    hamburger.src = hamburger.src.endsWith(hamburgerIcon)? closeIcon : hamburgerIcon; // ternary operator, končí hamburger src na hamburgerIcon? ano, pak closeIcon : ne, pak hamburgerIcon 
})

for (let i = 0; i < menuSections.length; i++) {
    menuSections[i].addEventListener('click', () => {
        // Toggle the menu items display for the clicked section
        menuItems[i].classList.toggle('menu-main_items_show');

        // Toggle arrow direction for the clicked section based on menu-items show class
        if (menuItems[i].classList.contains('menu-main_items_show')) {
            menuTitles[i].classList.add('menu-main_title_arrowUp');
        } else {
            menuTitles[i].classList.remove('menu-main_title_arrowUp');
        }

        // Additional toggle for the last item
        if (i === 2) {
            menuItems[i].classList.toggle('menu-main_items_showLast');
        }

        // Remove 'menu-main_items_show' and 'menu-main_title_arrowUp' class from all other menuItems
        for (let j = 0; j < menuSections.length; j++) {
            if (j !== i) {
                menuItems[j].classList.remove('menu-main_items_show');
                menuTitles[j].classList.remove('menu-main_title_arrowUp');
                if (j === 2) {
                    menuItems[j].classList.remove('menu-main_items_showLast');
                }
            }
        }
    });
}

// Menu pro desktop

window.addEventListener('load', () =>{
    if(window.innerWidth >= 378){
        showMenuDesktop();
        toggleMenuSection();
    }
})

function showMenuDesktop(){ //Přidání tříd pro load na 378px
    hamburger.style.display = 'none';
    menu.classList.add('menu_desktop');
    menuMain.classList.add('menu-main_desktop');
    menuSignUp.classList.add('menu-signup_desktop');
    menuTitles.forEach(title => {            
        title.classList.add('menu-main_title_desktop');
    });
    menuItems.forEach(items => {
        items.classList.add('menu-main_items_desktop');
    })
}

function toggleMenuSection(){
    for (let i = 0; i < (menuTitles.length); i++) {
        
        // Add an event listener to each menu title for mouseover event
        menuSections[i].addEventListener('mouseover', () => {
            menuItems[i].style.display = 'block';
            menuTitles[i].classList.add('menu-main_title_arrowUp');

        });
        // Add an event listener to each menu section to handle event target checking
        menuSections[i].addEventListener('mouseout', (event) => {
            if (menuSections[i].contains(event.target)) {
                menuItems[i].style.display = 'none';
                menuTitles[i].classList.remove('menu-main_title_arrowUp');

            }
        });
    }
}




