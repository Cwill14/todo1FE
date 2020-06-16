import React, { useState } from 'react';
import axios from 'axios';

const LoginSignup = props => {
    
    const loginUrl = "http://localhost:8000/auth/login";
    const signupUrl = "http://localhost:8000/auth/signup";

    const [formState, setFormState] = useState("");
    const [formInfo, setFormInfo] = useState({
        username: "",
        password: ""
    })

    const handleChanges = e => {
        e.preventDefault();
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault();
        if(formState === "login") {
            axios.post(loginUrl, formInfo)
                .then(res => {
                    console.log("res = ", res);
                    localStorage.setItem("token", res.data.token)
                    setFormInfo({
                        username: "",
                        password: ""
                    })
                    window.alert(res.data.message)
                    props.history.push("/main")
                })
                .catch(err => {
                    console.log("err = ", err);
                })
        } else if (formState === "signup") {
            axios.post(signupUrl, formInfo)
            .then(res => {
                console.log("res = ", res);
                localStorage.setItem("token", res.data.token)
                setFormInfo({
                    username: "",
                    password: ""
                })
                window.alert(res.data.message)
                props.history.push("/main")

            })
            .catch(err => {
                console.log("err = ", err);
            })
        } else {

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
                                <button>Sign up</button>
                        }
                    </form>
                :
                    <p>please fill out form</p>
            }
        </div>
    );
};

export default LoginSignup;