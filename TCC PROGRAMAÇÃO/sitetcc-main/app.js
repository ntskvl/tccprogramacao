const button = document.querySelector('.button_')
const popup = document.querySelector ('.popup-wrapper')
const corpo =  document.querySelector('body')
//const closeButtonX = document.querySelector('.popup-link')
const closeButton = document.querySelector ('.popup-close')

button.addEventListener ('click', () => {
popup.style.display = 'block';
corpo.style.backgroundColor = 'rgba(0, 0, 0,.5)'
})

popup.addEventListener ('click', event => {
const classNameOfClickedElement = event.target.classList [0]
const classNames = ['popup-close', 'popup-link', 'popup-wrapper']
const shouldClosepopup = classNames.some (className => className === classNameOfClickedElement)

if (shouldClosepopup){
    popup.style.display = 'none'
    corpo.style.backgroundColor = 'black'
}})



const button2 = document.querySelector('.button_2')
button2.addEventListener ('click', () => {
popup.style.display = 'block';
corpo.style.backgroundColor = 'rgba(0, 0, 0,.5)'
})


const button_3 = document.querySelector('.button_3')
button_3.addEventListener ('click', () => {
popup.style.display = 'block';
corpo.style.backgroundColor = 'rgba(0, 0, 0,.5)'
})


const button4 = document.querySelector('.button_4')
button4.addEventListener ('click', () => {
popup.style.display = 'block';
corpo.style.backgroundColor = 'rgba(0, 0, 0,.5)'
})


const button_5 = document.querySelector('.button_5')
button_5.addEventListener ('click', () => {
popup.style.display = 'block';
corpo.style.backgroundColor = 'rgba(0, 0, 0,.5)'
})


const button_6 = document.querySelector('.button_6')
button_6.addEventListener ('click', () => {
popup.style.display = 'block';
corpo.style.backgroundColor = 'rgba(0, 0, 0,.5)'
})


const button_7 = document.querySelector('.button_7')
button7.addEventListener ('click', () => {
popup.style.display = 'block';
corpo.style.backgroundColor = 'rgba(0, 0, 0,.5)'
})


const button_8 = document.querySelector('.button_8')
button8.addEventListener ('click', () => {
popup.style.display = 'block';
corpo.style.backgroundColor = 'rgba(0, 0, 0,.5)'
})


const button9 = document.querySelector('.button_9')
button9.addEventListener ('click', () => {
popup.style.display = 'block';
corpo.style.backgroundColor = 'rgba(0, 0, 0,.5)'
})
