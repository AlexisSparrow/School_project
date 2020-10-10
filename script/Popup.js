class Popup {
    constructor(element) {
        this.element = element;
    }

    open() {
        this.element.classList.add('popup_is-opened')
    }

    close() {
        this.element.classList.remove('popup_is-opened')
    }
}

class PopupAdd extends Popup {
    constructor(element) {
        super(element);
        this.element
            .querySelector('.close__type_add')
            .addEventListener('click', this.close.bind(this))
        this.element
            .querySelector('#formAdd')
            .addEventListener('submit', this.cardSetting)
    }

    cardSetting() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        };
        event.preventDefault();
        userData.name = nameForm.value;
        userData.link = linkForm.value;
        userData.id = `${`${getRandomInt(100)}` + `${getRandomInt(78)}` + `${getRandomInt(92)}`}`;
        console.log(userData.id)
        cardList.addCard(userData.name, userData.link, null ,userData.id);
        dataStorage.saveCardItem(userData.name, userData.link, userData.id)
        popupAdd.close();
        formAdd.reset();
    };
}
class PopupEdit extends Popup {
    constructor(element) {
        super(element);
        this.element
            .querySelector('.close__type_edit')
            .addEventListener('click', this.close.bind(this))
        this.element
            .querySelector('#formEdit')
            .addEventListener('submit', function () { 
                event.preventDefault();
                userInfo.setUserInfo(usernameForm.value, dutyForm.value);
                popupEdit.close()
            })
    }
}

class PopupAvatar extends Popup {
    constructor(element) {
        super(element)
        this.element
            .querySelector('.close__type_avatar')
            .addEventListener('click', this.close.bind(this));
        this.element
            .querySelector('#formAvatar')
            .addEventListener('submit', this.avatarSetting.bind(this));

    }

    avatarSetting() {
        event.preventDefault();
        avatar.style.backgroundImage = `url('${avatarForm.value}')`;
        dataStorage.userAvatarUpdate(avatarForm.value);
        formAvatar.reset();
        popupAvatar.close();
    }
}

class PopupPhoto extends Popup {
    constructor(element) {
        super(element);
        this.element
            .querySelector('.close__type_photo')
            .addEventListener('click', this.close.bind(this))
    }

    imageInstaller() {
        popupImage.setAttribute('src', event.target.style.backgroundImage.slice(5, -2));
    }
}