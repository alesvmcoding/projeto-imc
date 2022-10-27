import { AlertError } from './alert-error.js'
import { notNumber, IMC, displayResultMessage } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.onInput = () => {
    AlertError.close()
}
inputHeight.onInput = () => {
    AlertError.close()
}
form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }
    
    AlertError.close()

    const result = IMC(weight, height)

    displayResultMessage(result)
}



