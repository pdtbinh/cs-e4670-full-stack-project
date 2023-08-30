import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const AddProjectForm = ({ user }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [showForm, setShowForm] = useState(false)

    if (!showForm)
        return (
            <button onClick={() => setShowForm(true)}>
                Add project
            </button>
        )
    else if (!user)
        return <Navigate to='/login'/>

    return (
        <>
            <form>
                <div>
                    title
                    <input
                        type="text"
                        value={title}
                        name="title"
                        onChange={({ target }) => setTitle(target.value)}
                    />
                </div>
                <div>
                    description
                    <input
                        type="password"
                        value={description}
                        name="password"
                        onChange={({ target }) => setDescription(target.value)}
                    />
                </div>
                <button type="submit">
                    Add
                </button>
                <button onClick={() => setShowForm(false)}>
                    Cancel
                </button>
            </form>
        </>
    )
}

export default AddProjectForm