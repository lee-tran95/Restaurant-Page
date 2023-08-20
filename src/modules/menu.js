 import '../styles/menu.css'
function loadMenu(){
    const menuDiv = document.createElement('div')
    menuDiv.id = 'menu-content'

    const menuItems = document.createElement('div')
    menuItems.classList.add('menu-items')

    menuDiv.append(menuItems)
    document.getElementById('content').append(menuDiv)
}

export default loadMenu