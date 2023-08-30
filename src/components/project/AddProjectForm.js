import { useState } from 'react'

const AddProjectForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <>
            <form>
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
                        type="password"
                        value={description}
                        name="password"
                        onChange={({ target }) => setDescription(target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default AddProjectForm