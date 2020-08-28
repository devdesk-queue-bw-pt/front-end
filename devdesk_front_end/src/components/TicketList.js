import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth';




const TicketList = () => {

  const [tickets, setTickets] = useState([])

  const getTickets = () => {

    axiosWithAuth()
      .get('/tickets')
      .then(response => {
        setTickets(response.data)
        console.log('BACKEND RESPONSE: ', response)
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
      </tr>
    </thead>
    <tbody>
      {tickets.map(ticket => {

        return(

        <div>
          <tr>
            <th scope="row">{ticket.id}</th>
            <td>{ticket.category}</td>
            <td>{ticket.title}</td>
            <td>{ticket.description}</td>
            <td>{ticket.steps_taken}</td>
            <td>{ticket.creator_id}</td>
            <td>{ticket.status}</td>
          </tr>
          <button>Edit</button>
        </div>
        
        )

      })}
    </tbody>
  </Table>

  )


}


export default TicketList