import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status]);
    return (
        <div className="user-form">
            <Form>
                <label htmlFor="name">
                    Name
                    <Field 
                    id="name"
                    type="text"
                    name="name"
                    placeholder="name"
                    />
                    {touched.name && errors.name (
                        <p className="errors">{errors.name}</p>
                    )}
                </label>
                <label htmlFor="email">
                    email
                    <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                    />
                    {touched.email && errors.email (
                        <p className="errors">{errors.email}</p>
                    )}
                </label>
            </Form>
        </div>
    )

}
    



