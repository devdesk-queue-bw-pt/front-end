import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import axios from 'axios'




const TicketList = () => {

  const [tickets, setTickets] = useState([])

  const getTickets = () => {

    axios
      .get('https://devdesklambda.herokuapp.com/')
      .then(response => {
        setTickets(response.data)
        console.log('RESPONSE: ', response)
      })
      .catch(error => {
        console.log('ERROR: ', error)
      })

  }

  useEffect(getTickets, [tickets])

  return(

    
    <Table>
      <div>
        <h1>hu</h1>
      </div>
    <thead>
      <tr>
        <th>Category</th>
        <th>Title</th>
        <th>Description</th>
        <th>Troubleshooting</th>
      </tr>
    </thead>
    <tbody>
      {tickets.map(ticket => {

        return(
        <tr>
          <th scope="row">{ticket.category}</th>
          <td>{ticket.title}</td>
          <td>{ticket.description}</td>
          <td>{ticket.tried}</td>
        </tr>)

      })}
    </tbody>
  </Table>

  )


}


export default TicketList