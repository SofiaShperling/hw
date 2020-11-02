const arrayRandElement = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}
function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }
const elementList=document.querySelectorAll('div')
const intervalIdColor = setInterval(function() {
    let elemColor=arrayRandElement(elementList)
    elemColor.style.backgroundColor = randomColor() 
    }, 2000)
const intervalIdNoColor = setInterval(function() {
    let elemNoColor=arrayRandElement(elementList)
    elemNoColor.style.backgroundColor = '#FFFFFF'
    }, 2000)