import { NavLink } from 'react-router-dom'
import { setToken } from '../../services/project'
import { localStorageKey } from '../../keys/keywords'

const Layout = ({ user, setUser, children }) => {

    const handleLogout = () => {
        window.localStorage.removeItem(localStorageKey)
        setUser(null)
        setToken(null)
    }

    return (
        <div>
            {user ?
                <>
                    <p>{`User: ${user.name}`}</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
                : <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
            }
            {children}
        </div>
    )
}

export default Layout