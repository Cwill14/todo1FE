import React, { useState } from 'react';

import './task.css';

const Task = props => {

    let showUpdate = false;

    const setDelete = () => {
        console.log("props.id = ", props.id)
        props.setTargetId(props.id)
        props.deleteTask()
    }

    return (
        <div className="task-box">
            <input
                type="checkbox"
                value={props.task.completed}
                name="completed"
                onChange={props.toggleComplete}
            />
            <p>{props.task.task}</p>
            <button onClick={() => showUpdate = !showUpdate}>Update Task</button>
            {
                showUpdate &&
                    <form>
                        <input
                            type="text"
                        />
                    </form>
                    
            }
            <button onClick={setDelete}>Delete Task(dbl click for now)</button>
        </div>
    );
};

export default Task;