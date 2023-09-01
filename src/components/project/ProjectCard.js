import { useState } from 'react'
import { remove } from '../../services/project'
import EditProjectForm from './EditProjectForm'

const ProjectCard = ({ user, project, projects, setProjects }) => {

    const [showEditForm, setShowEditForm] = useState(false)

    const handleRemoveProject = async () => {
        const id = project.id
        await remove(id)
        setProjects(projects.filter(p => p.id !== id))
    }

    if (showEditForm)
        return <EditProjectForm
            project={project}
            projects={projects}
            setProjects={setProjects}
            setShowForm={setShowEditForm}
        />

    return (
        <>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {(user && user.username === project.user.username) ?
                <>
                    <button onClick={() => setShowEditForm(true)}>Edit</button>
                    <button onClick={handleRemoveProject}>Delete</button>
                </>
                : null
            }
        </>
    )
}

export default ProjectCard