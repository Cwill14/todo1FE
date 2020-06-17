import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginSignup = props => {
    
    const loginUrl = "http://localhost:8000/auth/login";
    const signupUrl = "http://localhost:8000/auth/signup";
    const [formState, setFormState] = useState("");
    const [formInfo, setFormInfo] = useState({
        username: "",
        password: "",
        cPassword: ""
    })
    const [error, setError] = useState("")
    
    useEffect(() => {
        // console.log("error in UE = ", error);
    }, [error])

    const handleChanges = e => {
        e.preventDefault();
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        // console.log("submit running");
        e.preventDefault();
        if(formState === "login") {
            axios.post(loginUrl, { username: formInfo.username, password: formInfo.password })
                .then(res => {
                    console.log("res = ", res);
                    localStorage.setItem("token", res.data.token)
                    setFormInfo({
                        username: "",
                        password: "",
                        cPassword: ""
                    })
                    window.alert(res.data.message)
                    props.history.push("/main")
                })
                .catch(err => {
                    console.log("err = ", err);
                    setError("username and/or password incorrect")
                })
        } else if (formState === "signup") {
            if(formInfo.cPassword === formInfo.password) {
                axios.post(signupUrl, { username: formInfo.username, password: formInfo.password })
                .then(res => {
                    console.log("res = ", res);
                    localStorage.setItem("token", res.data.token)
                    setFormInfo({
                        username: "",
                        password: "",
                        cPassword: ""
                    })
                    window.alert(res.data.message)
                    props.history.push("/main")
    
                })
                .catch(err => {
                    console.log("err = ", err);
                })
            } else {
                // console.log("error b = ", error);
                setError("passwords must match")
                // console.log("error a = ", error);
                // window.alert("passwords must match")
            }
        } else {
            setError("problem with form")
        }
    }
    
    return (
        <div>
            <button onClick={() => setFormState("signup")}>Sign up</button>
            <button onClick={() => setFormState("login")}>Login</button>
            {
                formState === "signup" || formState === "login"
                ?
                    <form onSubmit={submit}>
                        <input
                            type="username"
                            placeholder="username"
                            name="username"
                            value={formInfo.username}
                            onChange={handleChanges}
                            autoComplete="off"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            value={formInfo.password}
                            onChange={handleChanges}
                            autoComplete="off"
                        />
                        {
                            formState === "login"
                            ?
                                <button>Login</button>
                            :
                                <>
                                <input
                                    type="password"
                                    placeholder="confirm password"
                                    name="cPassword"
                                    value={formInfo.cPassword}
                                    onChange={handleChanges}
                                    autoComplete="off"
                                />
                                <button>Sign up</button>
                                </>
                        }
                        { <p>{error}</p> }
                    </form>
                :
                    // <p>bleh</p>
                    // error
                    // ? <p>{error}</p>
                    <p>please fill out form</p>
                    
            }
        </div>
    );
};

export default LoginSignup;