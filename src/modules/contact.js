
function loadContact(){
    const contactDiv = document.createElement('div')
    contactDiv.textContent = "Hi"
    document.getElementById('content').append(contactDiv)
}

export default loadContact