import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'

//Actions
import {POST_REGISTRATION, POST_REGISTRATION_FAILURE, POST_REGISTRATION_SUCCESS, postNewUser} from '../actions/index'
import axios from "axios";

const schema = yup.object().shape({

  username: yup.string().required('Please enter a valid username'),
  password: yup.string().required('Please enter a valid password'),
    first_name: yup.string().required('Please enter your first name'),
    last_name: yup.string().required('Please enter your last name'),

})

const CreateAccount = (props) => {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = newUser => {
      axios
          .post("https://devdesklambda.herokuapp.com/api/auth/register", newUser)
          .then(res => {
              console.log("MJM : Create Ticket : Successful", res)
              // dispatch({type: POST_REGISTRATION_SUCCESS, payload: res.data })
          })
          .catch(err => {
              console.log("MJM : Create Ticket : Err", err.response)
              //dispatch({type: POST_REGISTRATION_FAILURE, payload: err.response })
          })
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

      <label htmlFor='first_name'></label>
      <input
        placeholder='First Name'
        id='first_name'
        name='first_name'
        data-cy='first_name'
        type='text'
        ref={register({ required: true})}
      />
      {<p>{errors.last_name?.message}</p>}

      <label htmlFor='last_name'></label>
      <input
        placeholder='Last Name'
        id='last_name'
        name='last_name'
        data-cy='last_name'
        type='text'
        ref={register({ required: true})}
      />
      {<p>{errors.last_name?.message}</p>}


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
      <label htmlFor='role'>Create Account For:</label>
      <select id='role' name='role' data-cy='role' ref={register({})}>
        <option>1</option>
        <option>2</option>
      </select> 



      <button type='submit' data-cy='submit'>Create</button>

    </form>
  )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
        errorData: state.err
    }
}

const mapDispatch = {
        POST_REGISTRATION,
        POST_REGISTRATION_SUCCESS,
        POST_REGISTRATION_FAILURE
}


// export default connect(
//     mapDispatch,
//     mapStateToProps,{
//     postNewUser
// }
// ) (CreateAccount)

export default CreateAccount;