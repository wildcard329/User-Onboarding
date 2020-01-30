import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserForm({ values, errors, touched }) {
    
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
                <button>Submit</button>
            </div>
            <label>
                <Field type="checkbox" name='ts' checked={values.ts} />
                Accept ToS
            </label>
        </Form>
        <div>

        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password }) {
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
    handleSubmit(values) {
        console.log(values);
    }
})(UserForm)
export default FormikUserForm;