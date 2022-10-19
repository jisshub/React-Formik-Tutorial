# React-Formik-Tutorial

[Formik](#Formik) 

[useFormik Hook](#useformik-hook)

[Managing Form State](#managing-form-state)

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
 
# 6. Form validation

https://www.youtube.com/watch?v=tthHwRRGkj0&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&index=6

For every field, we add required attributes. In other all fields are important and neds to implementated,

time: 4:25

