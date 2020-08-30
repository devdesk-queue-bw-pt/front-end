import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useForm } from 'react-hook-form'
import { useRouteMatch } from 'react-router-dom'



const NewComments = () => {


 const routeMatch = useRouteMatch()
 const ticket = routeMatch.params



 const [formState, setFormState] = useState({
   comment: '',
   user_id: ticket.creator_id,
   ticket_id: ticket.ticket_id
 })


 const { register, handleSubmit, errors } = useForm({})


 const onSubmit = newComment => {

  const newComments = {...formState, comment: newComment}

  axiosWithAuth()
  .post('/tickets/submit/comment', newComments)
  .then(newComment => {
    console.log(newComment)
    setFormState({
      comments: '',
      user_id: ticket.creator_id,
      ticket_id: ticket.ticket_id
    })
  })
  .catch(error => console.log('SUBMIT COMMENT ERROR: ', error.response))

 }


 return(

  <form onSubmit={handleSubmit(onSubmit)}>

    <label htmlFor='comment'>New Comments</label>
    <textarea
      id='comment'
      name='comment'
      type='text'
      ref={register({ required: false})}
      />

      <button type='submit'>Submit</button>
  </form>
 )


}


export default NewComments