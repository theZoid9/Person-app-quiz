const {header} = require('../components/header')
const {footer} = require('../components/footer')
const homepage=()=>{
    const app = document.getElementById('app')
    app.prependChild(header())

    const main = document.createElement('div')
    main.id='main'
    app.appendChild(main)
    const welcome = document.createElement('h1')
    welcome.textContent='Welcome to Brain Tease'
    welcome.style.color="#000000"
    main.appendChild(welcome)
    app.appendChild(footer())
}

module.exports={homepage}