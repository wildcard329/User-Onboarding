import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const UserForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        status && setUsers(users => [...users, status]);
    }, [status])
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
                    {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}
                </label>
                <label htmlFor="email">
                    Email
                    <Field
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email"
                    />
                    {touched.email && errors.email && (<p className="errors">{errors.email}</p>)}
                </label>
                <label htmlFor="password">
                    Name
                    <Field
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                    {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
                </label>
                <label className="checkbox-container">
                    Terms of Service
                    <Field
                        id="tos"
                        type="checkbox"
                        name="tos"
                        checked={values.tos}
                    />
                    {errors.tos && (<p className="errors">{errors.tos}</p>)}
                    <span className="checkmark" />
                </label>
                <button type="submit">Register</button>
            </Form>
            {users.map(user => {
                return (
                    <ul key={user.id}>
                        <li>Name: {user.name}</li>
                        <li>Email: {user.email}</li>
                        <li>Password: {user.password}</li>
                    </ul>
                )
            })}
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.name || '',
            email: props.email || '',
            password: props.password || '',
            tos: props.tos || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        tos: Yup.bool().oneOf([true],"Please accept Terms of Service to Continue").required()
    }),
    handleSubmit(values, { setStatus, resetForm}) {
        axios.post('https://reqres.in/api/users', values)
                .then(res => {
                    setStatus(res.data);
                    resetForm();
                })
                .catch(err => console.log(err.response))
    }
})(UserForm)
export default FormikUserForm;