import { useState } from 'react'
import { create } from '../../services/user'
import { login } from '../../services/login'
import { localStorageKey } from '../../keys/keywords'
import { NavLink, Navigate } from 'react-router-dom'
import { setToken } from '../../services/project'

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
        <form onSubmit={handleRegister}>
            <div>
                name
                <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={({ target }) => setName(target.value)}
                />
            </div>
            <div>
                username
                <input
                    type="text"
                    value={username}
                    name="username"
                    onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type="submit">Sign-up</button>
            <NavLink to='/login'>Already have an account?</NavLink>
        </form>
    )
}

export default RegisterForm