import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserForm() {
    const [user, setUser] = useState({ name: '', email: '', password: ''});

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user.name);
        console.log(user.email);
        console.log(user.password);
    };
    
    return (
        <div className='userForm'>
            {console.log(user)}
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        onChange={event => handleChange(event)}
                        />
                </label>
                <label>
                    email:
                    <input
                        type="text"
                        name="email"
                        onChange={event => handleChange(event)}
                        />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        name="password"
                        onChange={event => handleChange(event)}
                        />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm;