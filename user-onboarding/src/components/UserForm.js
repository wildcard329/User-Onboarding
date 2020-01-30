import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserForm() {
    
    return (
        <div className='userForm'>
            <Form>
                    <Field type="text" name="name" placeholder="Name"/>
                    <Field type="text" name="email" placeholder="email"/>
                    <Field type="text" name="password" placeholder="Password"/>
                <button>Submit</button>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password }) {
        return {
            name: name || '',
            email: email || '',
            password: password || ''
        }
    },
    handleSubmit(values) {
        console.log(values);
    }
})(UserForm)
export default FormikUserForm;