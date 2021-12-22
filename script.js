

let form = document.querySelector("#registerForm")



form.onsubmit = function(evento) {
    evento.preventDefault()

    let isError = false

    let inputName = document.forms['registerForm']['name']
 
    if (!inputName.value) {
        isError = true
        inputName.classList.add('inputError')
        let nameSpan = inputName.nextSibling.nextSibling
        nameSpan.innerText = "Name entered incorrectly."

    }else {
        inputName.classList.remove('inputError')
        let nameSpan = inputName.nextSibling.nextSibling
        nameSpan.innerText = ''
    }

    let inputRegister = document.forms['registerForm']['email']

    if (!inputRegister.value) {
        isError = true
        inputRegister.classList.add('inputError')
        let registerSpan = inputRegister.nextSibling.nextSibling
        registerSpan.innerText = 'Email address entered incorrectly.'

    }else {
        inputRegister.classList.remove('inputError')
        let registerSpan = inputRegister.nextSibling.nextSibling
        registerSpan.innerText = ''
    }

    let inputSelect = document.forms['registerForm']['city']


    if (!inputSelect.value) {
        isError = true
        inputSelect.classList.add ('inputError')
        let selectSpan = inputSelect.nextSibling.nextSibling
        selectSpan.innerText = 'You have not selected a city.'

    }else {
        inputSelect.classList.remove('inputError')
        let selectSpan = inputSelect.nextSibling.nextSibling 
        selectSpan.innerText = ''
    }

    if (!isError) {
        form.submit()
    }
}
