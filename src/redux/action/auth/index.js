import axios from 'axios'

const doLogin = (email, password) => {
    return dispatch => {
        axios.post("https://reqres.in/api/login", { email, password })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    dispatch({
                        type: "LOGIN",
                        payload: res.data
                    })

                }
            })

    }
}

export { doLogin }