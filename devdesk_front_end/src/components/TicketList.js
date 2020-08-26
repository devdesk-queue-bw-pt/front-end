import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Ticket from './Ticket';



const TicketList = () => {

  const [tickets, setTickets] = useState([])

  const getTickets = () => {

    axios
      .get('')
      .then(response => {
        setTickets(response.data)
        console.log('RESPONSE: ', response)
      })
      .catch(error => {
        console.log('ERROR: ', error)
      })

  }

  useEffect(getTickets, [])

  return(

    <div>
      {tickets.map(ticket => {
        return(
          <Ticket ticket={ticket} key={ticket.id} />
        )
      })}
    </div>

  )


}


export default TicketList