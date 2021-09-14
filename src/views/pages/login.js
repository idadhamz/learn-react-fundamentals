import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { doLogin } from '../../redux/action/auth'

const Login = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = useSelector(state => state.auth.userData)

    const submitLogin = (e) => {
        e.preventDefault()
        dispatch(doLogin(email, password))

        setTimeout(() => {
            localStorage.setItem("user", JSON.stringify({ login: true, email }))
            history.push('/app')
            checkUserLogin()
        }, 5000)
    }

    const checkUserLogin = () => {
        if (user) {
            console.log(`User has log in`);
        } else {
            console.log(`User has not log in`);
        }
    }

    return (
        <div className="w-full h-screen font-sans bg-cover bg-landscape">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl">
                            <p className="mb-8 text-2xl font-bold text-center text-black">
                                Login
                            </p>
                            <div className="mb-2">
                                <div className="relative ">
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="login-with-bg-email" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" autoComplete="new-password" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="relative ">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="login-with-bg-password" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="password" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <button type="button" onClick={(e) => submitLogin(e)} className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
