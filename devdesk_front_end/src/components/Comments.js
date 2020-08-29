import React, { useState, useEffect } from 'react'; 
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useRouteMatch } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth';




const Comments = () => {

 const routeMatch = useRouteMatch()
 const ticket = routeMatch.params

 console.log('TICKET: ', ticket)


 const [comments, setComments] = useState([])


 const getComments = () => {

  axiosWithAuth()
    .get('/tickets/comments')
    .then(response => {
      setComments(response.data)
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })


}



useEffect(getComments, [])


console.log('COMMENTS: ', comments)




  return (


    <ListGroup>
      {comments.map(comment => {
        return(
          <ListGroupItem>Ticket ID: {comment.ticket_id} --- Comment:{comment.comment}</ListGroupItem>
        )
      })}
    </ListGroup>
  )
}

export default Comments