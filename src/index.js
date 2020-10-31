// img
const examplePNG = require('./img/test64x64.png')
const exampleSVG = require('./img/test.svg')

//styles
import './styles/main.scss'

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Как интересно!'

// добавляем заголовок в DOM
const root = document.querySelector('#app')
root.append(heading)

//img

const image1 = document.createElement('img')
image1.src = examplePNG
image1.setAttribute('width', 211)
image1.setAttribute('height', 211)
root.append(image1)


const imageSVG = document.createElement('img')
imageSVG.src = exampleSVG
imageSVG.setAttribute('width', 200)
imageSVG.setAttribute('height', 200)
root.append(imageSVG)
