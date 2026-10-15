$(".changeType").on("click", function(event) {
    if(!$("#logowanie").is(":visible")) {
        $("#logowanie").show()
        $("#rejestrowanie").hide()
    } else {
        $("#logowanie").hide()
        $("#rejestrowanie").show()
    }
})

document.getElementById('passwordInputRejestrowanie')
    .addEventListener("input", () => {
        checkPass()
        checkPassMatch()
    })

document.getElementById('passwordInputAgain')
    .addEventListener("input", checkPassMatch)



$("#submitInput").click(LoginUser)
$("#submitInputRejestrowanie").click(function() {
    const password = document
        .getElementById('passwordInputRejestrowanie')
        .value.trim()

    const passwordAgain = document
        .getElementById('passwordInputAgain')
        .value.trim()

    const login = document
        .getElementById('loginInputRejestrowanie')
        .value.trim()

    if(
        Validation(password, passwordAgain, true) &&
        Validation(login)
    ) {
        savePass()
    }
})