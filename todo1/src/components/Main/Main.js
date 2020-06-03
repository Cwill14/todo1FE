import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Task from './Task.js';

const Main = () => {
    
    const [list, setList] = useState([])
    
    const [sampleList, setSampleList] = useState([
        {
            id: 1,
            task: "Wash the car",
            completed: false
        },
        {
            id: 2,
            task: "Mow the lawn",
            completed: false
        }
    ])

    useEffect(() => {
        axios
            .get('http://localhost:8000/main')
            .then(res => {
                console.log("res: ", res)
                setList(res.data)
            })
            .catch(err => {
                console.log("err: ", err)
            })
    }, [])

    const toggleComplete = e => {
        e.preventDefault();
        // setSampleList([
        //     ...sampleList,
        //     {

        //     }

        // ])
    }

    const addTask = task => {

    }

    const deleteTask = taskID => {

    }

    return (
        <div>
            <h1>To Do:</h1>
            {
                list.map(obj => {
                    return <Task key={obj.id} task={obj} toggleComplete={toggleComplete}/>
                    // <div classname="task-box">
                    //     <input
                    //         type="checkbox"
                    //         value={obj.completed}
                    //         name="completed"
                    //     />
                    //     <p>{obj.task}</p>
                    // </div>
                })
            }
        </div>
    );
};

export default Main;