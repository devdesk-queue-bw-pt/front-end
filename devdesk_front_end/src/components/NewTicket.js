import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const schema = yup.object().shape({

  title: yup.string().required('Please enter a title'),
  description: yup.string().required('Please enter a description'),
  steps_taken: yup.string().required('Please enter steps you have taken to resolve the issue yourself'),
  category: yup.string().oneOf(['HTML', 'CSS', 'Less / Sass', 'Javascript', 'React', 'IDE Issues', 'Other']).required('Please Select a Category'),
  status: yup.string(),
  creator_id: yup.number()
})

const NewTicket = () => {

  const[formState, setFormState] = useState({
    title: '',
    description: '',
    steps_taken: '',
    category: '',
    status: 'Open',
    creator_id: 1
  })

  console.log(formState)


  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  console.log(errors)

  const onSubmit = ticketData => {

    const newTicket = {...formState, ...ticketData}
    

    axiosWithAuth()
      .post('/tickets/submit', newTicket)
      .then(data => {
        console.log(newTicket)
        setFormState({
          title: '',
          description: '',
          steps_taken: '',
          category: '',
          status: 'Open',
          creator_id: 1
        })
      })
      .catch(error => console.log('SUBMIT ERROR: ', error.response))
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

      {/*steps_taken*/}
      <label htmlFor='steps_taken'></label>
      <textarea
        placeholder="I've tried..."
        id='steps_taken'
        name='steps_taken'
        data-cy='steps_taken'
        type='text'
        ref={register({ required: true})}
      />
      {<p>{errors.steps_taken?.message}</p>}


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