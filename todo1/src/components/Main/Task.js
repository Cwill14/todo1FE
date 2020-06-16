import React, { useState } from 'react';

import './task.css';
import UpdateForm from './UpdateForm.js';

const Task = props => {

    const [showUpdate, setShowUpdate] = useState(false)
    
    return (
        <div className="task-box">
            {
                showUpdate
                    ?
                        <UpdateForm
                            task={props.task.task}
                            taskID={props.id}
                            updateTask={props.updateTask}
                            setShowUpdate={setShowUpdate}
                            showUpdate={showUpdate}
                        />

                    : 
                        <>
                            <p>{props.task.task}</p>
                            <button onClick={() => {
                                setShowUpdate(!showUpdate)
                                // console.log("showUpdate inside= ", showUpdate)
                            }}>Update Task</button>
                        </>
            }
            <button onClick={() => props.deleteTask(props.id)}>Delete Task</button>
        </div>
    );
};

export default Task;