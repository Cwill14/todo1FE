import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../axiosWithAuth';
import { parseToken } from '../../parseToken';
import Task from './Task.js';
import AddForm from './AddForm.js';

const Main = props => {
    
    const baseURL = 'http://localhost:8000'

    const [list, setList] = useState([])
    const [taskInput, setTaskInput] = useState("");
    const [userId, setUserId] = useState(parseToken(localStorage.getItem("token")).subject)
    const [username, setUsername] = useState(parseToken(localStorage.getItem("token")).username)

    useEffect(() => {
        console.log("userId = ", userId)
        getList()
    }, [])

    const toggleComplete = e => {
        e.preventDefault();
    }

    const getList = () => {
        axiosWithAuth()
        .get(`${baseURL}/main/${userId}`)
        .then(res => {
            console.log("get res: ", res)
            setList(res.data)
        })
        .catch(err => {
            console.log("get err: ", err)
        })
    }

    const addTask = e => {
        // e.preventDefault();
        const newTask = {
            task: taskInput,
            uId: userId
        }
        axiosWithAuth()
            // .post(`${baseURL}/main/${userId}`, newTask)
            .post(`${baseURL}/main`, newTask)
            .then(res => {
                console.log("add res = ", res)
            })
            .catch(err => {
                console.log("add err = ", err);
            })
    }

    const deleteTask = id => {
        axiosWithAuth()
            .delete(`${baseURL}/main/${userId}/${id}`)
            .then(res => {
                console.log("delete res = ", res)
                getList()

            })
            .catch(err => {
                console.log("delete err = ", err)
            })
    }
    
    const updateTask = (id, changes) => {
        axiosWithAuth().put(`${baseURL}/main/${userId}/${id}`, changes)
            .then(res => console.log("update res = ", res))
            .catch(err => console.log("update err = ", err))
    }
    
    const handleInput = e => {
        e.preventDefault()
        setTaskInput(e.target.value)
    }

    const logout = () => {
        setUserId(0)
        setUsername("")
        // console.log(parseToken(localStorage.getItem("token")))
        localStorage.removeItem("token")
        props.history.push("/")
    }

    return (
        <div>
            <p>{username}</p>
            <button onClick={logout}>logout</button>
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
            <p>--------------------------------</p>
            <AddForm
                addTask={addTask}
                taskInput={taskInput}
                handleInput={handleInput}
            />
        </div>
    );
};

export default Main;