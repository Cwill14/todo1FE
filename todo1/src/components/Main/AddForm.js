import React from 'react';

const AddForm = props => {
    // const [taskInput, setTaskInput] = useState('');
    
    // const handleChanges = e => {
    //     e.preventDefault()
    //     setTaskInput(
    //         {[e.target.name]: e.target.value}
    //     )
    // }

    return (
        <div className="add-form">
            <p>New Task</p>
            {/* <form onSubmit={props.addTask(taskInput)}> */}
            <form onSubmit={props.addTask}>
                <input
                    type="text"
                    placeholder="add new task here"
                    name="taskInput"
                    value={props.taskInput}
                    onChange={props.handleInput}
                    autoComplete="off"
                />
                <button>Add Task</button>
            </form>
        </div>
    );
};

export default AddForm;