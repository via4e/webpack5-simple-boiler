// img
import examplePNG from './img/test64x64.png'
import exampleSVG from './img/test.svg'

//styles
import './styles/main.scss'

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Как интересно!'

// добавляем заголовок в DOM
const root = document.querySelector('#app')
root.append(heading)