# React-Formik-Tutorial

[Formik](#Formik) 

[useFormik Hook](#useformik-hook)

[Managing Form State](#managing-form-state)

[Handling Form Submission](#handling-form-submission)

[Form Validation](#form-validation)

[Displaying Error Messages](#displaying-error-messages)

[Visited Fields](#visited-fields)


# Formik

Formik is a library that helps you deal with forms in React.

```js
function YoutubeForm() {
  return (
    <div>
        <form>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name" name='name' />

            <label htmlFor='email'>E-mail</label>
            <input type={'email'} id='email' name='email' />

            <label htmlFor='channel'>Channel</label>
            <input type={'channel'} id='channel' name='channel' />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
```
# useFormik Hook

https://www.youtube.com/watch?v=tEU5k2O5qSU&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&index=3


Run below command to add formik to our project.

```bash
npm add formik
```

# Managing Form State

https://www.youtube.com/watch?v=c4EdCbk3K1c&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&index=4

- Managing form state using formik.
- **Form State** is an obect that maintains the values of different form fields.


## 1. Set initial values for our forms using *initialValues* property.

```js
const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        channel: ''
    }
});
```

## 2. Set onChange and value property to our input fields to access form data.

```js
 <input 
    type="text" 
    id="name" 
    name='name'
    onChange={formik.handleChange}
    value={formik.values.name}
  />
```

- Once we set *onChange* and *value* property in our inputs, *formik* will automatically track the form field values.

- *onChange* event is added to all the inpout that needs rto be tracked.

- *handleChange* method reads the *name* attribute and updates the corresponding property in the *values* object. 

- *values* object contains the values for all the form fields.

- We can access them individually and assign them to value property of the form fields.


## WorkFlow

1. First take the values from *initialValues* object and set them in the values obect.

2. Then when we change field values, it fires the handleChange methods which will update the values object. When values object is udpated, it is passed back into the form fields. This cycle ensures that form state is managed correclty. 

3. *formik.values* give access to form data.


# Handling Form Submission

https://www.youtube.com/watch?v=DZiltZH1-d0&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&index=5

```js
const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        channel: ''
      },
      onSubmit: values => {
        console.log('form data', values)
      }
    });

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
      </div>
```

## Steps

1. In form tag, we specify *onSubmit* prop and set it equal to *formik.handleSubmit*.

2. *onSubmit* method receives the latest values of form data as its argument.
 
# Form Validation

https://www.youtube.com/watch?v=tthHwRRGkj0&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&index=6

For every field, we add required attributes. In other all fields are important and neds to implementated,


- After cleaning the codebase, Here we take *initialValues* property, *onSubmit* and *validate* function outside the main function. In *useFormik* hook, we pass above ones as arguments.

```js
import React from 'react';
import {useFormik} from 'formik';

  const initialValues = {
    name: '',
    email: '',
    channel: ''
  }

  const onSubmit = values => {
    console.log('form data', values)
  }

  const validate = values => {
    let errors = {}
    if (!values.name) {
        errors.name = 'Required'
    } if (!values.email) {
        errors.email = 'Required'
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = 'Invalid email format';
    }
    if (!values.channel) {
        errors.channel = 'Required';
    }
    return errors;
  }
  function YoutubeForm() {
    const formik = useFormik({
      initialValues,
      onSubmit,
      validate
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
```

# Displaying Error Messages

Display error messages only if it exists. For that we use conditional rendering.

```js
<input 
    type="text" 
    id="name" 
    name='name'
    onChange={formik.handleChange}
    value={formik.values.name}
  />
  {formik.errors.name ? 
    <div>
      {formik.errors.name}
    </div>: null
  }
```

If the errors exist in name input, we render the div element. Similarly we write error messages for other inputs as well.

## Workflow

1. First we create a *validate* function and pass it to *useFormik* hook.

2. *validate* function checks the value of form field and basically populate the objects with appropriate error messages.

# Visited Fields

https://www.youtube.com/watch?v=GGl__utJ0t0

- We have to store the visited fields in an object called *touched*. 

- **formik.touched** 

- *touched* gives an information about whether a field has been visited or not.

```js
console.log("Form Touched", formik.touched);
```

# Improving Validation UX



