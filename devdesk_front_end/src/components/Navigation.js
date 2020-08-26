import React, { useState } from 'react'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

//The goal of this nav is to be simple. It will have one link to the home page and then a dropdown for user/admin stuff (login, tickets, etc.)

const Navigation = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (

    <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="#" active>Home</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Menu
          </DropdownToggle>
          <DropdownMenu>
              <DropdownItem tag={Link} to='./login'>Login</DropdownItem>
              <DropdownItem tag={Link} to='./create_account'>Create Account</DropdownItem>
              <DropdownItem tag={Link} to='./new_ticket'>Create New Ticket</DropdownItem>
              <DropdownItem tag={Link} to='./view_tickets'>View Open Tickets</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <h2 className='logo'>DevDesk Queue</h2>
      </Nav>
    
    </div>

  )

}

export default Navigation