import React from 'react';
import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik';
import TextError from './TextError';
import * as Yup from 'yup'; 

  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
      facebook: '',
      twitter: ''
    },
    phoneNumbers: ['', '']
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
                  <ErrorMessage 
                    name='name' 
                    component={TextError}
                  />
              </div>
              
              <div className='form-control'>
                <label htmlFor='email'>E-mail</label>
                  <Field 
                    type={'email'} 
                    id='email' 
                    name='email'
                  />
                  <ErrorMessage name='email'>
                    {errorMsg => <div className='error'>{errorMsg}</div>}
                  </ErrorMessage>
              </div>
            
              <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                  <Field 
                    type={'channel'} 
                    id='channel'
                    name='channel'
                  />
                  <ErrorMessage name='channel'>
                    {errorMsg => 
                      <div className='error'>{errorMsg}</div>}
                  </ErrorMessage>
              </div>
              <button type='submit'>Submit</button>

              <div className='form-control'>
                <label htmlFor='comments'>Comments</label>
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
                      ...props => {
                        const {field, meta} = props
                        console.log('Render Props', props);
                        return (
                          <div>
                            <input 
                              type={'text'}
                              id='address'
                              {...field}
                            />
                            {
                            meta.touched && meta.error ? 
                              <div>{meta.error}</div> : null
                            }
                          </div>
                        )
                        }
                      }
                  />
                  <ErrorMessage name='comments' />
              </div>

              <div className='form-control'>
                <label htmlFor='facebook'>Facebook Profile</label>
                <Field 
                  type='text'
                  id='facebook'  
                  name='social.facebook'
                />
              </div>

              <div className='form-control'>
                <label htmlFor='twitter'>Twitter Profile</label>
                <Field 
                  type='text'
                  id='twitter'  
                  name='social.twitter'
                />
              </div>
              
              <div className='form-control'>
                <label htmlFor='primaryPh'>Primary Phone Number</label>
                <Field
                  type='text'
                  id='primaryPh'
                  name='phoneNumbers[0]'
                />
              </div>

              <div className='form-control'>
                <label htmlFor='secondaryPh'>
                  Secondary Phone Number
                </label>
                <Field
                  type='text'
                  id='secondaryPh'
                  name='phoneNumbers[1]'
                />
              </div>

              <div className='form-control'>
                  <FieldArray name='phNumbers'>
                      {
                        (props) => {
                          const {field, meta, form} = props
                          console.log(props)
                        }
                      }
                  </FieldArray>
s              </div>
              <button type='submit'>Submit</button>
              
          </Form>
      </Formik>
    )
  }

export default YoutubeForm;
