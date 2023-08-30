import { useState, useEffect } from 'react'
import { getAll } from '../../services/project'
import AddProjectForm from './AddProjectForm'
import ProjectCard from './ProjectCard'

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
        <>
            <p>All projects:</p>
            {projects.map(
                project => <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                />
            )}
            <AddProjectForm
                user={user}
                projects={projects}
                setProjects={setProjects}
            />
        </>
    )
}

export default Projects