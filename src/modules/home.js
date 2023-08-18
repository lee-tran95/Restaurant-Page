
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

    const hoursOfOperationDiv = document.createElement('div')
    hoursOfOperationDiv.classList.add('hoursOfOperation')

    const weekdays = document.createElement('p')
    weekdays.classList.add('days')
    weekdays.textContent = "Mondays - Thursdays: "

    const weekdaysHours = document.createElement('span')
    weekdaysHours.classList.add('hours')
    weekdaysHours.textContent = " 8AM - 8PM"

    const weekends = document.createElement('p')
    weekends.classList.add('days')
    weekends.textContent = "Friday - Saturday: "

    const weekendsHours = document.createElement('span')
    weekendsHours.classList.add('hours')
    weekendsHours.textContent = " 8AM -11PM"

    weekdays.appendChild(weekdaysHours)
    weekends.appendChild(weekendsHours)
    aboutDiv.append(restaurantAboutHeader, restaurantAbout, orderButton)
    hoursOfOperationDiv.append(weekdays, weekends)
    homeDiv.append(hoursOfOperationDiv, aboutDiv, )
    document.getElementById('content').append(homeDiv)
}

export default loadHome