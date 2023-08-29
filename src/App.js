import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<p>Layout<Outlet/></p>}>
                    <Route index element={<p>Projects</p>} />
                    <Route path="login" element={<p>Login</p>} exact/>
                    <Route path="*" element={<p>404: Error</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
