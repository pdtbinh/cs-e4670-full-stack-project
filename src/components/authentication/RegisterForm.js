import { useState } from 'react'
import { create } from '../../services/user'

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            await create({ name, username, password })
            // call login
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
        </form>
    )
}

export default RegisterForm