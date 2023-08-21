 import '../styles/menu.css'
function loadMenu(){
    const menuDiv = document.createElement('div')
    menuDiv.id = 'menu-content'

    const menuItems = document.createElement('div')
    menuItems.classList.add('menu-items')
    
    menuItems.appendChild(
        createMenuItem(
            "Udon",
            "Delcious thick noodles in a sauce of your choice"
        )
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