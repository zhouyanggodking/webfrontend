import userList from './user-list'
const auth = {
    authenticate (userName, password) {
        let users = userList.filter((user) => user.userName === userName);
        let isLoggedIn = false;
        if(users.length && users[0].password === password){
            window.localStorage.setItem('isLoggedIn', 'true')
            isLoggedIn = true;
        } else {
            window.localStorage.setItem('isLoggedIn', 'false')
            isLoggedIn = false;
        }
        return isLoggedIn
    },

    isLoggedIn () {
        return window.localStorage.getItem('isLoggedIn') === 'true'
    },

    logOut(){
        window.localStorage.setItem('isLoggedIn', 'false')
    }
}

export default auth;