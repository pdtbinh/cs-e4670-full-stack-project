import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { create } from '../../services/project'
import './style/ProjectForm.css'

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
            <div className='AddProjectButtonDiv'>
                <button onClick={() => setShowForm(true)}>
                    <p>Add more project</p>
                </button>
            </div>
        )
    else if (!user)
        return <Navigate to='/login'/>

    return (
        <div>
            <form onSubmit={handleAddProject} className='ProjectForm'>
                <input
                    type="text"
                    value={title}
                    name="title"
                    placeholder='Enter project title...'
                    onChange={({ target }) => setTitle(target.value)}
                />
                <textarea
                    type="text"
                    value={description}
                    name="description"
                    placeholder='Enter project description...'
                    onChange={({ target }) => setDescription(target.value)}
                />
                <div>
                    <button type="submit">
                        <p>Add</p>
                    </button>
                    <button onClick={() => setShowForm(false)}>
                        <p>Cancel</p>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddProjectForm