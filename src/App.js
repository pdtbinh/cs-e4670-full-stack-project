import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import LoginForm from './components/authentication/LoginForm'
import { useState, useEffect } from 'react'
import { localStorageKey } from './keys/keywords'
import Projects from './components/project/Projects'
import { setToken } from './services/project'
import Layout from './components/layout/Layout'

const App = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUserStr = window.localStorage.getItem(localStorageKey)
        if (loggedUserStr) {
            const userJSON = JSON.parse(loggedUserStr)
            setToken(userJSON.token)
            setUser(userJSON)
        }
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Layout user={user} setUser={setUser}>
                        <Outlet/>
                    </Layout>
                }>
                    <Route index element={<Projects user={user}/>} />
                    <Route path="login" element={<LoginForm user={user} setUser={setUser}/>}/>
                    <Route path="*" element={<p>404: Error</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
