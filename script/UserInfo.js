class UserInfo {

    setUserInfo(name, job) {
        event.preventDefault()
        username.textContent = name;
        duty.textContent = job;
        dataStorage.userInfoUpdate(name, job)
    }

    loadUserInfo(accountInfo) {
        username.textContent = accountInfo.name;
        duty.textContent = accountInfo.job;
    }
}