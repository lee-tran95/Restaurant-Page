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
    homeButton.textContent = "Home"

    const menuButton = document.createElement('button')
    menuButton.textContent = "Menu"

    const contactButton = document.createElement('button')
    contactButton.textContent = "Contact"
    
    navBar.append(homeButton, menuButton, contactButton)
    header.append(restaurantName, restaurantDescription, navBar)

    const restaurantAbout = document.createElement('p')
    restaurantAbout.textContent = "There are many reasons why this is the best restaurant"

    document.getElementById('content').append(header, restaurantAbout)
}

export default loadPage