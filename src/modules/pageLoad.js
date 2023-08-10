import '../styles/home.css'

function loadPage(){
    const header = document.createElement('header')
    header.classList.add('header')

    const restaurantName = document.createElement('h1')
    restaurantName.textContent = "SUSHIDON"

    const restaurantDescription = document.createElement('span')
    restaurantDescription.textContent = "JAPANESE NOODLES & SUSHI"

    const navBar = document.createElement('nav')

    const homeButton = document.createElement('button')
    homeButton.id = "home"
    homeButton.textContent = "Home"

    const menuButton = document.createElement('button')
    menuButton.id = "menu"
    menuButton.textContent = "Menu"

    const contactButton = document.createElement('button')
    contactButton.id = "contact"
    contactButton.textContent = "Contact"
    
    navBar.append(homeButton, menuButton, contactButton)
    header.append(restaurantName, restaurantDescription, navBar)

    document.getElementById('content').append(header)

}

export default loadPage