# React-Formik-Tutorial

[Formik](#Formik) 

[useFormik Hook](#useformik-hook)


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

Time: 0:48 




