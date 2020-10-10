class DataStorage {
    constructor(cardsArray) {
        this.cardsArray = cardsArray
        if (this.cardsArray === null) {
            this.cardsArray = []
        }
    }

    saveCardItem(name, link, id) {
        const obj = {
            name: name,
            link: link,
            likeStatus: false,
            id: id
        }

        this.cardsArray.push(obj)

        localStorage.setItem('cardsList', JSON.stringify(this.cardsArray))

    }

    updateLikeStatus(cardId) {
        const newArr = []
        for (const element of this.cardsArray) {
            if (element.id == cardId) {
                if (element.likeStatus == false) {
                    element.likeStatus = true
                } 
                else if (element.likeStatus == true) {
                    element.likeStatus = false
                }
            }
            newArr.push(element)
        }
        localStorage.setItem('cardsList', JSON.stringify(newArr))
    }

    removeCard(cardId) {
        const newArr = []
        for (const element of this.cardsArray) {
            if (element.id !== cardId) {
                newArr.push(element)
            }
        }
        localStorage.setItem('cardsList', JSON.stringify(newArr))
    }

    userInfoUpdate(name, job) {
        const obj = {
            name: name,
            job: job
        }

        localStorage.setItem('userInfo', JSON.stringify(obj))
    }

    userAvatarUpdate(link) {
        localStorage.setItem('avatarLink', JSON.stringify(link))
    }
}