import React, { useState } from 'react';

const UpdateForm = props => {

    const [formState, setFormState] = useState({
        task: props.task
    })
    
    const update = () => {
        props.updateTask(props.taskID, formState)
    }
    const handleChanges = e => {
        e.preventDefault()
        setFormState({
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={update}> 
            <input
                type="text"
                name="task"
                value={formState.task}
                onChange={handleChanges}
            />
            <button>Save Changes</button>
            <button
                onClick={() => props.setShowUpdate(!props.showUpdate)}>
                Cancel
            </button>
        </form>
    );
};

export default UpdateForm;