import React, { useState, useEffect } from 'react';

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
                // setList(res.data)
            })
            .catch(err => {
                console.log("err: ", err)
            })
    }, [])

    return (
        <div>
            <h1>To Do:</h1>
            {
                sampleList.map(obj => {
                    <Task task={obj.task} completed={obj.completed} />
                })
            }
        </div>
    );
};

export default Main;