import React from 'react';
import { useForm } from 'react-hook-form'



const Login = () => {

  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = data => console.log(data)

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      {/*USERNAME*/}
      <label htmlFor='username'>Username:</label>
      <input
        id='username'
        name='username'
        data-cy='username'
        type='text'
        ref={register({ required: true})}
      /> 
      {errors.username && <p>Username is required</p>}

      {/*PASSWORD*/}
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        name='password'
        data-cy='password'
        type='password'
        ref={register({ required: true})}
      />
      {errors.password && <p>Password is required</p>}

    </form>
  )
}


export default Login