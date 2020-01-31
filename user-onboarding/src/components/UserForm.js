import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserForm({ values, errors, touched, isSubmitting }) {
    
    return (
        <Form>
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="text" name="name" placeholder="Name"/>
            </div>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="text" name="email" placeholder="email"/>
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="text" name="password" placeholder="Password"/>
            </div>
            <div>
                <label>
                    <Field type="checkbox" name='ts' checked={values.ts} />
                    Accept ToS
                </label>
            </div>
            <div>
                <button disabled={isSubmitting}>Submit</button>
            </div>
        </Form>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, ts }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            ts: ts || false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
                .required('Name required'),
        email: Yup.string()
              .email('Invalid email')
              .required('email required'),
        password: Yup.string()
                .min(6, 'Enter a password 6 characters or longer')
                .required('Password required')
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        if (values.email === "alreadytaken@atb.dev") {
            setErrors({ email: "that email is already taken" });
        } else {
            axios
                .post('https://reqres.in/api/users', values)
                .then(res => {
                    console.log(res);
                    resetForm();
                    setSubmitting(false);
                });
        }
        console.log(values);
    }
})(UserForm)
export default FormikUserForm;