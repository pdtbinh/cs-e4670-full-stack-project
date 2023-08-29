import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import LoginForm from './components/authentication/LoginForm'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>Layout<Outlet/></>}>
                    <Route index element={<p>Projects</p>} />
                    <Route path="login" element={<LoginForm/>}/>
                    <Route path="*" element={<p>404: Error</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
