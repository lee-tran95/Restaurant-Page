 import '../styles/menu.css'
function loadMenu(){
    const menuDiv = document.createElement('div')
    menuDiv.id = 'menu-content'

    const menuItems = document.createElement('div')
    menuItems.classList.add('menu-items')
    
    menuItems.append(
        createMenuItem(
            "Miso Udon",
            "Our Sanuki-Style Udon served in a savory vegan miso broth with fresh bean sprouts, corn, and your choice of ground spicy soy meat or sweet beef."
        ),
        createMenuItem(
            "Nikutama",
            "Our Sanuki-style Udon served in our Umami-rich (flavor-packed) sauce. Can be enjoyed hot or cold"
        ),
        createMenuItem(
            "Tonkotsu",
            "Our Sanuki-Style Udon served in our creamy and savory pork broth"
        ),
        createMenuItem(
            "B.K.",
            "Our Sanuki-style Udon served in our Umami-rich (flavor-packed) sauce. Can be enjoyed hot or cold"
        ),
        createMenuItem(
            "Hawaiian Roll",
            "California roll with Tuna and Green Onions with Soy Mustard Sauce"
        ),
        createMenuItem(
            "In & Out Shrimp",
            "Shrimp Tempura Roll with Crabmeat, Avocado, and Cucumber drizzled with Shrimp Cilantro and Eel Sauce"
        ),
        createMenuItem(
            "Rainbow Roll",
            "California Roll with Assorted Fish and Avocado"
        ),
        createMenuItem(
            "Double Crab",
            "Softshell Crab, Avocado and Cucumber topped with Spicy Crab and Eel Sauce"
        ),
    )

    menuDiv.append(menuItems)
    document.getElementById('content').append(menuDiv)
}

function createMenuItem(name, description){
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')

    const itemName = document.createElement('h2')
    itemName.classList.add('item-name')
    itemName.textContent = `${name}`

    const itemDescription = document.createElement('p')
    itemDescription.classList.add('item-description')
    itemDescription.textContent = `${description}`

    menuItem.append(itemName, itemDescription)

    return menuItem
}

export default loadMenu