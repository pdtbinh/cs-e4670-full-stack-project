const Layout = ({ user, children }) => {
    return (
        <div>
            {user ? `User: ${user.name}` : 'Please log in'}
            {children}
        </div>
    )
}

export default Layout