import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'
import axiosWithAuth from "../utils/axiosWithAuth";

const schema = yup.object().shape({

  username: yup.string().required('Please enter a valid username'),
  password: yup.string().required('Please enter a valid password'),
  authLevel: yup.string().oneOf(['Student', 'Administrator'])

})

const Login = () => {

    const [ loginData, setLoginData ] = useState(
        {
            username: "",
            password: "",
            authLevel: ""
        }
    )


  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = loginData => {
        axiosWithAuth()
            .post("/auth/login", loginData)
            .then(res => {
                console.log('MJM: Login.js: Response from Login', res)
                localStorage.setItem("token", res.data.token)
                return <Redirect to='/view_tickets' />

            })
            .catch(err =>
                console.error("mjm: Login.js: login: err.message: ", err.message)
            );
  }


  

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      {/*USERNAME*/}
      <label htmlFor='username'></label>
      <input
        placeholder='Username'
        id='username'
        name='username'
        data-cy='username'
        type='text'
        ref={register({ required: true})}
      /> 
      {<p>{errors.username?.message}</p>}


      {/*PASSWORD*/}
      <label htmlFor='password'></label>
      <input
        placeholder='Password'
        id='password'
        name='password'
        data-cy='password'
        type='password'
        ref={register({ required: true})}
      />
      {<p>{errors.password?.message}</p>}


      {/*Auth Level*/}
      <label htmlFor='authLevel'>Login As:</label>
      <select id='authLevel' name='authLevel' data-cy='authLevel' ref={register({})}>
        <option>Student</option>
        <option>Administrator</option>
      </select> 



      <button type='submit' data-cy='submit'>Login</button>

    </form>
  )
}


export default Login