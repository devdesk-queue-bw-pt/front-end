import React from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'

const schema = yup.object().shape({

  username: yup.string().required('Please enter a valid username'),
  password: yup.string().required('Please enter a valid password'),
  authLevel: yup.string().oneOf(['Student', 'Administrator'])

})

const Login = () => {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)


  

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