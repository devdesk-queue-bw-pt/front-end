import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Ticket from './Ticket';
import { getAllTickets } from "../actions";
import {connect} from "react-redux";


const TicketList = (props) => {

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

  useEffect(() => { props.getAllTickets()}, [])
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

const mapStateToProps = (state) => {
  return{
    tickets: state.tickets
  }
}


export default connect(
  mapStateToProps,
    {getAllTickets}
) (TicketList)