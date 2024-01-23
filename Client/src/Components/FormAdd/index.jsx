import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const FormAdd = ({ getData }) => {
    async function AddMenu(values) {
        const res = await axios.post("http://localhost:3000/sons", values)
        getData()
    }

    return (
        <Formik
            initialValues={{ image: '', text: '', price: '' }}
            validationSchema={Yup.object({
                image: Yup.string()
                    .max(150, 'Must be 150 characters or less')
                    .required('Required'),
                text: Yup.string()
                    .max(30, 'Must be 30 characters or less')
                    .required('Required'),
                price: Yup.number()
                    .max(30, 'Must be 30 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { resetForm }) => {
                AddMenu(values)
                resetForm()
            }}
        >
            <Form>
                <label htmlFor="image">IMAGE</label>
                <Field name="image" type="text" />
                <ErrorMessage name="image" />

                <label htmlFor="text">TEXT</label>
                <Field name="text" type="text" />
                <ErrorMessage name="text" />

                <label htmlFor="price">PRICE</label>
                <Field name="price" type="number" />
                <ErrorMessage name="price" />

                <button type="submit">ADD</button>
            </Form>
        </Formik>
    );
};
export default FormAdd