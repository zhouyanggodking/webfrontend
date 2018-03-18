import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000'

const authService = {
    logIn (userName, password) {
        return new Promise((resolve, reject) => {
            axios.post('/login', {
                userName,
                password
            }, {
                headers: {
                    'x-custom-header': 'king',
                    'x-auth': true
                },
                params: {
                    godking: true
                }
            })
            .then(response => {
                resolve(response)
                window.localStorage.setItem('isLoggedIn', 'true')
                return true
            })
            .catch(error => {
                window.localStorage.setItem('isLoggedIn', 'false')
                reject(error)
            })
        })
    },
    isLoggedIn (){
        return window.localStorage.getItem('isLoggedIn') === 'true'
    }

}

export default authService

