import { useState } from 'react'
import { edit } from '../../services/project'

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
        <form onSubmit={handleEdit}>
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
                Save
            </button>
            <button onClick={() => setShowForm(false)}>
                Cancel
            </button>
        </form>
    )
}

export default EditProjectForm