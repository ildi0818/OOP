const form = document.getElementById('user-input');

function signupHandler(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username')
    const enteredUserName = usernameInput.value

    const passwordInput = document.getElementById('password')
    const enteredpassword = passwordInput.value

    if (enteredUserName.trim().length === 0) {
        alert('Invalid input - username must not be empty');
        return;
    }

    if (enteredpassword.trim().length <= 5) {
        alert('Invalid input - password must be six char or longer');
        return;
    }

    const user = {
        userName: enteredUserName,
        password: enteredpassword
    }

    console.log(user);
    console.log("Hi,I'm " + user.userName);
}

form.addEventListener('submit', signupHandler);