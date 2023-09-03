import { useState } from 'react'
import { remove } from '../../services/project'
import EditProjectForm from './EditProjectForm'
import Grid from '@mui/material/Grid'
import './style/Project.css'

const ProjectCard = ({ user, project, projects, setProjects }) => {

    const [showEditForm, setShowEditForm] = useState(false)

    const handleRemoveProject = async () => {
        if (confirm(`Do you want to remove ${project.title}?`)) {
            const id = project.id
            await remove(id)
            setProjects(projects.filter(p => p.id !== id))
        }
    }

    if (showEditForm)
        return <Grid item xs={10} md={5}>
            <EditProjectForm
                project={project}
                projects={projects}
                setProjects={setProjects}
                setShowForm={setShowEditForm}
            />
        </Grid>

    return (
        <Grid item xs={10} md={5}>
            <div className='ProjectCard'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {(user && user.username === project.user.username) ?
                    <div className='ProjectCardButtons'>
                        <button onClick={() => setShowEditForm(true)}>
                            <span style={{ 'color': 'white' }}>Edit</span>
                        </button>
                        <button onClick={handleRemoveProject}>
                            <span style={{ 'color': 'white' }}>Remove</span>
                        </button>
                    </div>
                    : <p style={{ 'height': 'fit-content' }}>
                        Proposed by: {project.user.name} ({project.user.username})
                    </p>
                }
            </div>
        </Grid>
    )
}

export default ProjectCard