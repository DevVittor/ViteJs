import './style.css'
import {header} from './src/components/header.js'
import {footer} from './src/components/footer.js'
import {inicio} from './src/pages/Inicio.js'

document.querySelector('#app').innerHTML = `
<header id='menu' class='sticky top-0 z-50'></header>
<main id='root'></main>
<footer class='bg-yellow-500' id='rodape'></footer>
`
header(document.getElementById('menu'))
inicio(document.getElementById('root'))
footer(document.getElementById('rodape'))
setupCounter(document.querySelector('#counter'))