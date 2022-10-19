import React from 'react';
import {useFormik} from 'formik';

function YoutubeForm() {

  const initialValues = {
    name: 'Ajith',
    email: '',
    channel: ''
  }

  const onSubmit = values => {
    console.log('form data', values)
  }

    const formik = useFormik({
      onSubmit: values => {
        console.log('form data', values)
      },
      validate: values => {
        // valoues.name values.email values.channel; 
        let errors = {}
        if (!values.name) {
            errors.name = 'Required'
        } if (!values.email) {
            errors.email = 'Required'
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
            errors.email = 'Invalid email format'
        }
        if (!values.channel) {
            errors.channel = 'Required'
        }
        return errors;
      }

  
    });

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input 
              type="text" 
              id="name" 
              name='name'
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <label htmlFor='email'>E-mail</label>
            <input 
              type={'email'} 
              id='email' 
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <label htmlFor='channel'>Channel</label>
            <input 
              type={'channel'} 
              id='channel'
              name='channel'
              onChange={formik.handleChange}
              value={formik.values.channel}
            />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm;
