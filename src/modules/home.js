
function loadHome(){
    const homeDiv = document.createElement('div')

    const restaurantAboutHeader = document.createElement('h4')
    restaurantAboutHeader.textContent = "SUSHIDON IS..."

    const restaurantAbout = document.createElement('p')
    restaurantAbout.textContent = "SushiDon provides hand crafted udon bowls, tempura, sushi and beverages from a theater kitchen, allowing guests to watch as their food is prepared.Our udon noodles and sushi are made to order to ensure that you are getting the best tasting Japanese food around."

    homeDiv.append(restaurantAboutHeader, restaurantAbout)
    document.getElementById('content').append(homeDiv)
}

export default loadHome