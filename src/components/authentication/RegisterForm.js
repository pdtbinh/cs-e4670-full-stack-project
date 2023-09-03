import { useState } from 'react'
import { create } from '../../services/user'
import { login } from '../../services/login'
import { localStorageKey } from '../../keys/keywords'
import { NavLink, Navigate } from 'react-router-dom'
import { setToken } from '../../services/project'
import './style/Auth.css'

const RegisterForm = ({ user, setUser }) => {
    if (user) return <Navigate to='/'/>

    const [name, setName] = useState('')
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

    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            await create({ name, username, password })
            await handleLogin(event)
        } catch (exception) {
            // do sth
        }
    }

    return (
        <div className='LoginDiv'>
            <form onSubmit={handleRegister} className='LoginForm'>
                <h1>
                    Join us!
                </h1>
                <div>
                    <p>Full name</p>
                    <input
                        type="text"
                        value={name}
                        name="name"
                        onChange={({ target }) => setName(target.value)}
                        required
                    />
                </div>
                <div>
                    <p>E-mail</p>
                    <input
                        type="email"
                        value={username}
                        name="username"
                        onChange={({ target }) => setUsername(target.value)}
                        required
                    />
                </div>
                <div>
                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        name="password"
                        onChange={({ target }) => setPassword(target.value)}
                        required
                    />
                </div>
                <button type="submit"><p>Sign-up</p></button>
                <NavLink to='/login'>Already have an account?</NavLink>
            </form>
        </div>
    )
}

export default RegisterForm