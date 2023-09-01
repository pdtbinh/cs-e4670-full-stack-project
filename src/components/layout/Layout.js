import { NavLink } from 'react-router-dom'
import { setToken } from '../../services/project'
import { localStorageKey } from '../../keys/keywords'
import LoginIcon from '@mui/icons-material/Login'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import './Layout.css'

const Layout = ({ user, setUser, children }) => {

    const handleLogout = () => {
        window.localStorage.removeItem(localStorageKey)
        setUser(null)
        setToken(null)
    }

    return (
        <div className='Layout'>
            <div className='LayoutPanel'>
                <h4>
                    <GroupWorkIcon fontSize='large' style={{ 'margin-right': '5px' }}/>
                    CollabConnect
                </h4>
                {user ?
                    <>
                        <p>{`User: ${user.name}`}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                    : <NavLink to='/login'>
                        <button><LoginIcon fontSize='large'/></button>
                    </NavLink>
                }
            </div>
            {children}
        </div>
    )
}

export default Layout