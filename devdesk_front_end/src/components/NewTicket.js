import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'
import axios from 'axios';

const schema = yup.object().shape({

  title: yup.string().required('Please enter a title'),
  description: yup.string().required('Please enter a description'),
  tried: yup.string().required('Please enter what you have tried yourself'),
  category: yup.string().oneOf(['HTML', 'CSS', 'Less / Sass', 'Javascript', 'React', 'IDE Issues', 'Other']).required('Please Select a Category')

})

const NewTicket = () => {

  const[formState, setFormState] = useState({
    title: '',
    description: '',
    tried: '',
    category: ''
  })


  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    axios
      .post('https://devdesklambda.herokuapp.com/api/tickets/submit')
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log('SUBMIT ERROR: ', error))
  }


  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      {/*TITLE*/}
      <label htmlFor='title'></label>
      <input
        placeholder='Title'
        id='title'
        name='title'
        data-cy='title'
        type='text'
        ref={register({ required: true})}
      /> 
      {<p>{errors.title?.message}</p>}


      {/*DESCRIPTION*/}
      <label htmlFor='description'></label>
      <textarea
        placeholder='Description'
        id='description'
        name='description'
        data-cy='description'
        type='text'
        ref={register({ required: true})}
      />
      {<p>{errors.description?.message}</p>}

      {/*TRIED*/}
      <label htmlFor='tried'></label>
      <textarea
        placeholder="I've tried..."
        id='tried'
        name='tried'
        data-cy='tried'
        type='text'
        ref={register({ required: true})}
      />
      {<p>{errors.tried?.message}</p>}


      {/*CATEGORY*/}
      <label htmlFor='category'>Category:</label>
      <select id='category' name='category' data-cy='category' ref={register({})}>
        <option>--Select a Category--</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>Less / Sass</option>
        <option>Javascript</option>
        <option>React</option>
        <option>IDE Issues</option>
        <option>Other</option>
      </select> 



      <button type='submit' data-cy='submit'>Submit</button>

    </form>
  )
}


export default NewTicket