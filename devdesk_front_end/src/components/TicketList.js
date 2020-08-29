import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
import NewComments from './NewComments'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'



const TicketList = () => {

  const [tickets, setTickets] = useState([])

  console.log('TICKES: ', tickets)


  const getTickets = () => {

    axiosWithAuth()
      .get('/tickets')
      .then(response => {
        setTickets(response.data)
        console.log('RESPONSE FOR TICKETS: ', response)
      })
      .catch(error => {
        console.log('ERROR: ', error)
      })

  }
  useEffect(getTickets, [])


  


  return(

    
    <Table>
      <thead>
        <tr>
          <th>Ticket ID</th>
          <th>Category</th>
          <th>Title</th>
          <th>Description</th>
          <th>Steps Taken</th>
          <th>Creator</th>
          <th>Status</th>
          <th>Comments</th>
        </tr>
      </thead>
        {tickets.map(ticket => {
          return(
          <tbody>
            <tr>
              <th scope="row">{ticket.id}</th>
              <td>{ticket.category}</td>
              <td>{ticket.title}</td>
              <td>{ticket.description}</td>
              <td>{ticket.steps_taken}</td>
              <td>{ticket.creator_id}</td>
              <td>{ticket.status}</td>
              <td>
              <Button tag={Link} to={`/new_comments/${ticket.id}/${ticket.creator_id}`}>New</Button>
              <Button tag={Link} to={`/view_comments/${ticket.id}/${ticket.creator_id}`}>View</Button>
              </td>
            </tr>
    
          </tbody>
          )
        })}
      
  </Table>

  )


}


export default TicketList