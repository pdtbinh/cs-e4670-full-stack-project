import { useState } from 'react'
import { login } from '../../services/login'
import { localStorageKey } from '../../keys/keywords'
import { Navigate } from 'react-router-dom'

const LoginForm = ({ user, setUser }) => {
    if (user) return <Navigate to='/'/>

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await login({ username, password })
            window.localStorage.setItem(localStorageKey, JSON.stringify(user))
            setUser(user)
        } catch (exception) {
            // show error message
        }
    }

    return (
        <form onSubmit={handleLogin}>
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
            <button type="submit">login</button>
        </form>
    )
}

export default LoginForm