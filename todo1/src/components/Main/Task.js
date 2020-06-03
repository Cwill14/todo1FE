import React from 'react';

const Task = props => {
    return (
        <div classname="task-box">
            <input type="checkbox" value={props.completed}/>
            <p>{props.task}</p>
        </div>
    );
};

export default Task;