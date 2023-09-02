import { useState } from 'react'
import { remove } from '../../services/project'
import EditProjectForm from './EditProjectForm'
import Grid from '@mui/material/Grid'
import './Project.css'

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
        <Grid item xs={10} md={5}>
            <div className='ProjectCard'>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {(user && user.username === project.user.username) ?
                    <>
                        <button onClick={() => setShowEditForm(true)}>Edit</button>
                        <button onClick={handleRemoveProject}>Delete</button>
                    </>
                    : null
                }
            </div>
        </Grid>
    )
}

export default ProjectCard