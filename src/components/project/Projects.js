import { useState, useEffect } from 'react'
import { getAll } from '../../services/project'
import AddProjectForm from './AddProjectForm'

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
            {projects.map(project => <p key={project.id}>{project.title}</p>)}
            <AddProjectForm user={user}/>
        </>
    )
}

export default Projects