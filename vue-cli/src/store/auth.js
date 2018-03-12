import userList from './user-list'

let isLoggedIn = false

const auth = {
    authenticate (userName, password) {
        console.log(userList)
        let users = userList.filter((user) => user.userName === userName);
        if(users.length){
            isLoggedIn = users[0].password === password
        } else {
            isLoggedIn = false
        }
        return isLoggedIn
    },

    isLoggedIn () {
        return isLoggedIn
    }
}

export default auth;