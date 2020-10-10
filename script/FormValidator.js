class FormValidator {
    constructor(form) {
        this.form = form;
        this.isValid = null;
    }

    setSubmitButtonState() {
        const submitButton = this.form.querySelector('button');
        const elements = Array.from(this.form);
        this.isValid = true;
        elements.forEach((item) => {
            if (!item.classList.contains('button')) {
                if (item.validity.valueMissing || item.validity.tooLong || item.validity.tooShort || item.validity.typeMismatch) {
                    this.isValid = false
                }
            }
            return this.isValid
        });

        if (this.isValid) {
            submitButton.removeAttribute('disabled');
            submitButton.classList.add('button__type_active');
        }
        else {
            submitButton.setAttribute('disabled', true);
            submitButton.classList.remove('button__type_active');
        }
    }

}
class FormValidatorAdd extends FormValidator {
    constructor(form) {
        super(form);
        this.form
            .addEventListener('keyup', this.setSubmitButtonState.bind(this));
        this.form
            .addEventListener('keyup', this.checkInputValidityAddName.bind(this));
        this.form
            .addEventListener('keyup', this.checkInputValidityAddLink.bind(this));
    }

    checkInputValidityAddName() {
        const errorName = document.querySelector('#errorName');
        if (nameForm.validity.valueMissing) {
            errorName.textContent = "Это обязательное поле";
        } else if (nameForm.validity.tooShort && !nameForm.validity.valueMissing || nameForm.validity.tooLong) {
            errorName.textContent = "Должно быть от 2 до 30 символов";
        } else {
            errorName.textContent = "";
        };

    }

    checkInputValidityAddLink() {
        const errorLink = document.querySelector('#errorLink');
        if (linkForm.validity.typeMismatch || linkForm.validity.valueMissing) {
            errorLink.textContent = "Здесь должна быть ссылка";
        } else {
            errorLink.textContent = "";
        };

    }
}

class FormValidatorEdit extends FormValidator {
    constructor(form) {
        super(form);
        this.form
            .addEventListener('keyup', this.setSubmitButtonState.bind(this));
        this.form
            .addEventListener('keyup', this.checkInputValidityEditUsername.bind(this));
        this.form
            .addEventListener('keyup', this.checkInputValidityEditDuty.bind(this));

    }

    checkInputValidityEditUsername() {
        const errorUsername = this.form.querySelector('#errorUsername');

        if (usernameForm.validity.valueMissing) {
            errorUsername.textContent = "Это обязательное поле";
        }
        else if (usernameForm.validity.tooShort && !usernameForm.validity.valueMissing || usernameForm.validity.tooLong) {
            errorUsername.textContent = "Должно быть от 2 до 30 символов";
        }
        else {
            errorUsername.textContent = "";
        }
    }

    checkInputValidityEditDuty() {
        const errorJob = this.form.querySelector('#errorJob');
        if (dutyForm.validity.valueMissing) {
            errorJob.textContent = "Это обязательное поле";
        }
        else if (dutyForm.validity.tooShort && !dutyForm.validity.valueMissing || dutyForm.validity.tooLong) {
            errorJob.textContent = "Должно быть от 2 до 30 символов";
        }
        else {
            errorJob.textContent = "";
        }

    }


}

class FormValidatorAvatar extends FormValidator {
    constructor(form, linkForm) {
        super(form);
        this.linkForm = linkForm;
        this.form
            .addEventListener('keyup', this.setSubmitButtonState.bind(this));
        this.form
            .addEventListener('keyup', this.checkInputValidityAvatarLink.bind(this));
    }

    checkInputValidityAvatarLink() {
        const errorLink = this.form.querySelector('#errorLink');
        if (this.linkForm.validity.typeMismatch || this.linkForm.validity.valueMissing) {
            errorLink.textContent = "Здесь должна быть ссылка";
        } else {
            errorLink.textContent = "";
        };
    }
}