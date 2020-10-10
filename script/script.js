let userData = {
  name: '',
  link: '',
  id: ''
};
const root = document.querySelector('.root')
const cardArea = root.querySelector('.places-list')
const cardAddButton = document.querySelector('.popup__button');
const username = document.querySelector('.user-info__name');
const duty = document.querySelector('.user-info__job');
const nameForm = formAdd.elements.name;
const linkForm = formAdd.elements.link;
const usernameForm = formEdit.elements.name;
const dutyForm = formEdit.elements.job;
const popupImage = document.querySelector('.popup__img');
const avatar = document.querySelector('.user-info__photo')
const avatarForm = formAvatar.elements.link;

const accountInfo = JSON.parse(localStorage.getItem('userInfo'))

const cardsArray = JSON.parse(localStorage.getItem('cardsList'))

const avatarLink = JSON.parse(localStorage.getItem('avatarLink'))

const dataStorage = new DataStorage(cardsArray)

const userInfo = new UserInfo();

const popupAvatar = new PopupAvatar(document.querySelector('.popup__type_avatar'));

const formVakidatorAvatar = new FormValidatorAvatar(formAvatar, avatarForm)

const formValidatorEdit = new FormValidatorEdit(document.forms.edit);

const formValidatorAdd = new FormValidatorAdd(document.forms.add);

const cardList = new CardList(document.querySelector('.places-list'));

const popupAdd = new PopupAdd(document.querySelector('.popup__type_add'));

const popupPhoto = new PopupPhoto(document.querySelector('.popup__type_photo'));

const popupEdit = new PopupEdit(document.querySelector('.popup__type_edit'));

const valueOfEditChecker = () => { usernameForm.value = username.textContent; dutyForm.value = duty.textContent; };

const openPopupAvatar = () => { if (event.target.classList.contains('user-info__photo')) popupAvatar.open(); };

const openPopupAdd = () => { if (event.target.classList.contains('user-info__button')) popupAdd.open(); };

const openPopupEdit = () => { if (event.target.classList.contains('edit__button')) popupEdit.open(); }

const openPopupImage = () => { if (event.target.classList.contains('place-card__image')) { popupPhoto.open(); popupPhoto.imageInstaller(); } };

const openPopup = () => { openPopupAdd(); openPopupEdit(); openPopupImage(); openPopupAvatar(); };

root.addEventListener('click', openPopup)

if (accountInfo !== null) {
    userInfo.loadUserInfo(accountInfo);
}
if (avatarLink !== null) {
    avatar.style.backgroundImage = `url('${avatarLink}')`;
}
if (cardsArray !== null) {
    cardList.addListCard(cardsArray);
}

valueOfEditChecker()
