import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'; 

  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: ''
  }

  const onSubmit = values => {
    console.log('form data', values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
            .email('Invaid Email Format')
            .required('Required!'),
    channel: Yup.string().required('Required!')
  });

  function YoutubeForm() {
    return (
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
                <Field 
                  type="text" 
                  id="name" 
                  name='name'
                />
                <ErrorMessage name='name' />
            </div>
              
            <div className='form-control'>
              <label htmlFor='email'>E-mail</label>
                <Field 
                  type={'email'} 
                  id='email' 
                  name='email'
                />
                <ErrorMessage name='email' />
            </div>
            
            <div className='form-control'>
              <label htmlFor='channel'>Channel</label>
                <Field 
                  type={'channel'} 
                  id='channel'
                  name='channel'
                />
                <ErrorMessage name='channel' />
            </div>
            <button type='submit'>Submit</button>

            <div className='form-control'>
              <label htmlFor='comments'>Channel</label>
                <Field 
                  as='textarea'
                  id='comments'
                  name='comments'
                />
                <ErrorMessage name='comments' />
            </div>

            <div className='form-control'>
              <label htmlFor='address'>Address</label>
                <Field 
                  id='address'
                  name='address'
                  {
                    (props) => {
                      console.log(props)
                      return <input id='address' />
                    }
                  }
                />
                <ErrorMessage name='comments' />
            </div>
            <button type='submit'>Submit</button>
          </Form>
      </Formik>
    )
  }

export default YoutubeForm;
