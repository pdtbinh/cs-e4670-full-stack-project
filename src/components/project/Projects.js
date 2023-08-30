import { useState, useEffect } from 'react'
import { getAll } from '../../services/project'

const Projects = () => {
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
        </>
    )
}

export default Projects