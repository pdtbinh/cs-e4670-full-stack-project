import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { create } from '../../services/project'

const AddProjectForm = ({ user, projects, setProjects }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [showForm, setShowForm] = useState(false)

    const handleAddProject = async (event) => {
        event.preventDefault()
        try {
            const project = { title, description }
            const createdProject = await create(project)
            setProjects([...projects, createdProject])
            setTitle('')
            setDescription('')
            setShowForm(false)
        } catch (exception) {
            // something
        }
    }

    if (!showForm)
        return (
            <div>
                <button onClick={() => setShowForm(true)}>
                    Add project
                </button>
            </div>
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