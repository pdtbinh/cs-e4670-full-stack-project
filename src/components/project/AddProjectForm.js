import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { create } from '../../services/project'

const AddProjectForm = ({ user, setUser }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [showForm, setShowForm] = useState(false)

    const handleAddProject = async (event) => {
        event.preventDefault()
        try {
            const project = { title, description }
            const createdProject = await create(project)
            setUser({ ...user, projects: [...user.projects, createdProject] })
        } catch (exception) {
            // do something
        }
    }

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
            <form onSubmit={handleAddProject}>
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
                        type="text"
                        value={description}
                        name="description"
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