class Validator {
    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';

    static validate(value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length === 0;
        }
        if (flag === this.MIN_LENGTH) {
            return value.trim().length > validatorValue;
        }
    }
}

class User {
    constructor(uName, uPassword) {
        this.username = uName;
        this.password = uPassword;
    }

    greet() {
        console.log("Hi I'm " + this.username);
    }
}

class UserInputForm {
    constructor() {
        this.form = document.getElementById('user-input');
        this.userNameInput = getElementById('username');
        this.passwordInput = document.getElementById('password')

        this.form.addEventListener('submit', this.signUpHandler.bind(this))
    }

    signUpHandler(event) {
        event.preventDefault();
        const enteredUserName = this.userNameInput.value;
        const enteredPassword = this.passwordInput.value;

        if (
            !Validator.validate(enteredUserName, Validator.REQUIRED) ||
            !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
        ) {
            alert('Invalid input')
            return;
        }
    }
}

new UserInputForm();
