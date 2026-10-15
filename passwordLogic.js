function savePass() {
    let users = JSON.parse(localStorage.getItem("users")) || []

    const loginExists = users.some(user => user[0] === login)

    if(loginExists) {
        alert("Taki użytkownik już istnieje")
        return
    }

    users.push([
        document.getElementById('loginInputRejestrowanie').value.trim(),
        document.getElementById('passwordInputRejestrowanie').value
    ])

    localStorage.setItem("users", JSON.stringify(users))
    alert("Account created successfully")
}


function Validation(itemToValid, itemToMatch = null, doPass = false) {
    let itemOk = true

    if(itemToValid === "") {
        itemOk = false
    }

    if(doPass) {
        if(itemToValid.length <= 7) {
            itemOk = false
        }

        let passwordVal = 0

        // znak specjalny
        const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if(format.test(itemToValid)) {
            passwordVal += 2
        }

        // duża litera
        const hasUpperCase = /[A-Z]/
        if(hasUpperCase.test(itemToValid)) {
            passwordVal += 1
        }

        // mała litera
        const hasLowerCase = /[a-z]/
        if(hasLowerCase.test(itemToValid)) {
            passwordVal += 1
        }

        // cyfra
        const hasNumber = /\d/
        if(hasNumber.test(itemToValid)) {
            passwordVal += 2
        }

        // długość
        if(itemToValid.length > 11) {
            passwordVal += 2
        }

        if(passwordVal < 4) {
            itemOk = false
        }

        // sprawdzenie powtórzonego hasła
        if(itemToMatch !== null && itemToValid !== itemToMatch) {
            itemOk = false
        }
    }

    return itemOk
}

function LoginUser() {
    event.preventDefault()
    const password = document
        .getElementById('passwordInput')
        .value.trim()

    const login = document
        .getElementById('loginInput')
        .value.trim()

    const users = JSON.parse(localStorage.getItem("users")) || []

    const userFound = users.find(user => {
        return user[0] === login && user[1] === password
    })

    if(userFound) {
        alert("Login complete, hello " + login)
    } else {
        alert("Login or password are wrong")
    }
}


const passwordR = document.getElementById("passwordInputRejestrowanie")
function checkPass() {

    if(passwordR.value.trim().length < 8) {
        passwordR.style.border = "solid 1px red"
    } else {
        let passwordVal = 0

        // znak specjalny
        const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if(format.test(passwordR.value)) {
            passwordVal += 2
        }

        // duża litera
        const hasUpperCase = /[A-Z]/
        if(hasUpperCase.test(passwordR.value)) {
            passwordVal += 1
        }

        // mala litera
        const hasLowerCase = /[a-z]/
        if(hasLowerCase.test(passwordR.value)) {
            passwordVal += 1
        }

        // cyfra
        const hasNumber = /\d/
        if(hasNumber.test(passwordR.value)) {
            passwordVal += 2
        }

        // dlugosc
        if(passwordR.value.trim().length > 11) {
            passwordVal += 2
        }

        // show if password is strong, medium or weak
        if(passwordVal >= 7) {
        passwordR.style.border = "solid 1px green"
        } else if(passwordVal >= 4) {
        passwordR.style.border = "solid 1px orange"
        } else {
        passwordR.style.border = "solid 1px rgb(255, 100, 100)"
        }
    }
}
const passwordInputAgain = document.getElementById('passwordInputAgain')
function checkPassMatch() {
    if(passwordInputAgain.value.length === 0) {
        passwordInputAgain.style.border = ""
        return
    }

    if(passwordR.value === passwordInputAgain.value) {
        passwordInputAgain.style.border = "solid 1px green"
    } else {
        passwordInputAgain.style.border = "solid 1px rgb(255, 100, 100)"
    }
}