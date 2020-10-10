
class CardList {
    constructor(container) {
        this.container = container;
    }

    addCard(name, link, likeStatus, cardId) {
        const { element } = new Card(name, link, likeStatus, cardId);
        this.container.appendChild(element);
    }

    addListCard(list) {
        for (const element of list) {
        const data = element;
        cardList.addCard(data.name, data.link, data.likeStatus, data.id);
        };
    }
}

