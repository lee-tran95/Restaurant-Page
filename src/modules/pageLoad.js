
function loadPage(){
    const header = document.createElement('h1')
    header.textContent = "Welcome to restaurant"
    
    const restaurantDescription = document.createElement('p')
    restaurantDescription.textContent = "There are many reasons why this is the best restaurant"

    document.getElementById('content').append(header, restaurantDescription)
}

export default loadPage