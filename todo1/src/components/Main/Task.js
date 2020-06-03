import React, { useState } from 'react';

const Task = props => {
    
    // const [state, setState] = useState({
    //     id: props.task.id,
    //     task: props.task.task,
    //     completed: props.task.completed
    // })

    // const handleChanges = e => {
    //     e.preventDefault();
    //     setState({
    //         ...state,
    //         [e.target.name]: e.target.value
    //     })
    // }


    // return (
    //     <div classname="task-box">
    //         <input
    //             type="checkbox"
    //             value={state.completed}
    //             name="completed"
    //             onChange={handleChanges}
    //         />
    //         <p>{state.task}</p>
    //     </div>
    // );
    return (
        <div className="task-box">
            <input
                type="checkbox"
                value={props.task.completed}
                name="completed"
                onChange={props.toggleComplete}
            />
            <p>{props.task.task}</p>
        </div>
    );
};

export default Task;