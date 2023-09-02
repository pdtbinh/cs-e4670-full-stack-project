import { useState } from 'react'
import { login } from '../../services/login'
import { localStorageKey } from '../../keys/keywords'
import { NavLink, Navigate } from 'react-router-dom'
import { setToken } from '../../services/project'
import './Auth.css'

const LoginForm = ({ user, setUser }) => {
    if (user) return <Navigate to='/'/>

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await login({ username, password })
            window.localStorage.setItem(localStorageKey, JSON.stringify(user))
            setToken(user.token)
            setUser(user)
        } catch (exception) {
            // show error message
        }
    }

    return (
        <div className='LoginDiv'>
            <form onSubmit={handleLogin} className='LoginForm'>
                <h1>
                    Welcome back!
                </h1>
                <div>
                    <p>E-mail</p>
                    <input
                        type="email"
                        value={username}
                        name="username"
                        required
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        name="password"
                        required
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit"><p>Login</p></button>
                <NavLink to='/register'>Don&apos;t have an account yet?</NavLink>
            </form>
        </div>
    )
}

export default LoginForm