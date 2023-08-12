
function loadHome(){

    const homeDiv = document.createElement('div')
    homeDiv.classList.add('homeContent')

    const aboutDiv = document.createElement('div')
    aboutDiv.classList.add('aboutContent')

    const restaurantAboutHeader = document.createElement('h4')
    restaurantAboutHeader.textContent = "SUSHIDON IS..."

    const restaurantAbout = document.createElement('p')
    restaurantAbout.textContent = "SushiDon provides hand crafted udon bowls, tempura, sushi and beverages from a theater kitchen, allowing guests to watch as their food is prepared. Our udon noodles and sushi are made to order to ensure that you are getting the best tasting Japanese food around."

    const orderButton = document.createElement('Button')
    orderButton.textContent = "ORDER NOW"

    

    aboutDiv.append(restaurantAboutHeader, restaurantAbout, orderButton)
    homeDiv.append(aboutDiv)
    document.getElementById('content').append(homeDiv)
}

export default loadHome