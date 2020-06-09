import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Task from './Task.js';
import AddForm from './AddForm.js';

const Main = () => {
    
    const baseURL = 'http://localhost:8000'

    const [list, setList] = useState([])
    const [taskInput, setTaskInput] = useState("");
    // const [targetId, setTargetId] = useState(0)

    useEffect(() => {
        getList()
    }, [])

    const toggleComplete = e => {
        e.preventDefault();
    }

    const getList = () => {
        axios
        .get(`${baseURL}/main`)
        .then(res => {
            console.log("get res: ", res)
            setList(res.data)
        })
        .catch(err => {
            console.log("get err: ", err)
        })
    }

    const addTask = e => {
        const newTask = {
            task: taskInput
        }
        axios
            .post(`${baseURL}/main`, newTask)
            .then(res => {
                console.log("add res = ", res)
            })
            .catch(err => {
                console.log("add err = ", err);
            })
    }

    const deleteTask = id => {
        axios
            .delete(`${baseURL}/main/${id}`)
            .then(res => {
                console.log("delete res = ", res)
                getList()

            })
            .catch(err => {
                console.log("delete err = ", err)
            })
    }
    
    const updateTask = (id, changes) => {
        axios.put(`${baseURL}/main/${id}`, changes)
            .then(res => console.log("update res = ", res))
            .catch(err => console.log("update err = ", err))
    }
    
    const handleInput = e => {
        e.preventDefault()
        // setTaskInput(
        //     {[e.target.name]: e.target.value}
        // )
        setTaskInput(e.target.value)
    }

    return (
        <div>
            <h1>To Do:</h1>
            {
                list.map(obj => {
                    return <Task
                        key={obj.id}
                        id={obj.id}
                        task={obj}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                        // setTargetId={setTargetId}
                        // targetId={targetId}
                    />
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
            <AddForm
                addTask={addTask}
                taskInput={taskInput}
                handleInput={handleInput}
            />
        </div>
    );
};

export default Main;