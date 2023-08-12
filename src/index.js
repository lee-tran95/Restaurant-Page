import initialLoad from './modules/pageLoad'
import loadHome from './modules/home'
import loadMenu from './modules/menu'
import './styles/home.css'

initialLoad()
loadHome()
let parent = document.getElementById('content')
let header = document.querySelector('.header')

document.getElementById('home').addEventListener('click', ()=>{
    parent.removeChild(header.nextSibling)
    loadHome()
})

document.getElementById('menu').addEventListener('click', ()=>{
    parent.removeChild(header.nextSibling)
    loadMenu()
})