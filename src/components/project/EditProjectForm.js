import { useState } from 'react'
import { edit } from '../../services/project'
import './style/ProjectForm.css'

const EditProjectForm = ({ project, projects, setProjects, setShowForm }) => {

    const [title, setTitle] = useState(project.title)
    const [description, setDescription] = useState(project.description)

    const findProjectIndex = (id, projectsList) => {
        for (let i = 0; i < projectsList.length; i++) {
            if (projects[i].id === id)
                return i
        }
    }

    const handleEdit = async (event) => {
        event.preventDefault()
        try {
            const edittedProject = await edit(project.id, { title, description })
            const projectsCopy = [ ...projects ]
            const projectIndex = findProjectIndex(edittedProject.id, projectsCopy)
            projectsCopy[projectIndex] = edittedProject
            setProjects(projectsCopy)
            setShowForm(false)
        } catch (exception) {
            // do something
        }
    }

    return (
        <form onSubmit={handleEdit} className='ProjectForm'>
            <div>
                <input
                    style={{ 'fontWeight': 'bold' }}
                    type="text"
                    value={title}
                    name="title"
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>
            <div>
                <textarea
                    type="text"
                    value={description}
                    name="description"
                    onChange={({ target }) => setDescription(target.value)}
                />
            </div>
            <div>
                <button type="submit">
                    <p>Save</p>
                </button>
                <button onClick={() => setShowForm(false)}>
                    <p>Cancel</p>
                </button>
            </div>
        </form>
    )
}

export default EditProjectForm