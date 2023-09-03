import { useState, useEffect } from 'react'
import { getAll } from '../../services/project'
import AddProjectForm from './AddProjectForm'
import ProjectCard from './ProjectCard'
import Grid from '@mui/material/Grid'
import './style/Project.css'

const Projects = ({ user }) => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const fetchedProjects = await getAll()
                if (fetchedProjects) {
                    setProjects(fetchedProjects)
                }
            } catch (exception) {
                // show some error
            }
        }
        fetch()
    }, [])

    return (
        <div className='Projects'>
            <Grid
                container
                spacing={8}
                rowSpacing={5}
                columns={12}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {projects.map(
                    project => <ProjectCard
                        key={project.id}
                        user={user}
                        project={project}
                        projects={projects}
                        setProjects={setProjects}
                    />
                )}
                <Grid item xs={10} md={5}>
                    <AddProjectForm
                        user={user}
                        projects={projects}
                        setProjects={setProjects}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Projects