import { NavLink } from 'react-router-dom'
import { setToken } from '../../services/project'
import { localStorageKey } from '../../keys/keywords'
import LoginIcon from '@mui/icons-material/Login'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import Tooltip from '@mui/material/Tooltip'
import './Layout.css'
import LogoutIcon from '@mui/icons-material/Logout'

const Layout = ({ user, setUser, children }) => {

    const handleLogout = () => {
        window.localStorage.removeItem(localStorageKey)
        setUser(null)
        setToken(null)
    }

    return (
        <div className='Layout'>
            <div className='LayoutPanel'>
                <h3>
                    <GroupWorkIcon fontSize='large' style={{ 'marginRight': '5px' }}/>
                    CollabConnect
                </h3>
                {user ?
                    <div className='UserInfoBox'>
                        <Tooltip title={`E-mail: ${user.username}`}>
                            <p><b>{user.name}</b></p>
                        </Tooltip>
                        <Tooltip title='Logout'>
                            <button onClick={handleLogout}>
                                <LogoutIcon fontSize='large'/>
                            </button>
                        </Tooltip>
                    </div>
                    : <NavLink to='/login'>
                        <Tooltip title='Login'>
                            <button>
                                <LoginIcon fontSize='large'/>
                            </button>
                        </Tooltip>
                    </NavLink>
                }
            </div>
            {children}
        </div>
    )
}

export default Layout