import { remove } from '../../services/project'

const ProjectCard = ({ user, project, projects, setProjects }) => {

    const handleRemoveProject = async () => {
        const id = project.id
        await remove(id)
        setProjects(projects.filter(p => p.id !== id))
    }

    return (
        <>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {(user && user.username === project.user.username) ?
                <button onClick={handleRemoveProject}>Delete</button>
                : null
            }
        </>
    )
}

export default ProjectCard