
class Card {
    constructor(name, link, likeStatus, cardId) {
        this.cardId = cardId
        this.element = this.createCard(name, link, likeStatus);
        this.element
        .querySelector('.place-card__delete-icon')
        .addEventListener('click', this.remove.bind(this));
        this.element
        .querySelector('.place-card__like-icon')
        .addEventListener('click', this.like.bind(this));
    }

    createCard(nameValue, linkValue, likeStatus) {


        if (likeStatus === true) {
            likeStatus = 'place-card__like-icon_liked';
        } else likeStatus = ''
    
        const card = document.createElement('div');
        card.classList.add('place-card');

        const template = 
        `<div class="place-card__image" style="background-image: url(${linkValue})"> 
            <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
            <h3 class="place-card__name">${nameValue}</h3>
            <button class="place-card__like-icon ${likeStatus}"></button>
        </div>`;

        card.id = this.cardId

        card.innerHTML = template;

        return card;
    }

    remove(event) {
        cardArea.removeChild(event.target.closest('.place-card'));
        dataStorage.removeCard(this.cardId)
    }

    like(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
        dataStorage.updateLikeStatus(this.cardId)
    }
}
