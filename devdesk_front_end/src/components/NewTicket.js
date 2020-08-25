import React from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'

const schema = yup.object().shape({

  title: yup.string().required('Please enter a title'),
  description: yup.string().required('Please enter a description'),
  tried: yup.string().required('Please enter what you have tried yourself'),
  category: yup.string().oneOf(['category 1', 'category 2', 'category 3', 'category 4', 'category 5', 'category 6'])

})

const NewTicket = () => {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)


  

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
        <option>Category 1</option>
        <option>Category 2</option>
        <option>Category 3</option>
        <option>Category 4</option>
        <option>Category 5</option>
        <option>Category 6</option>
      </select> 



      <button type='submit' data-cy='submit'>Submit</button>

    </form>
  )
}


export default NewTicket