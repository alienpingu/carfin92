import React, {Component} from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'



class Topbar extends Component {
  constructor(props) {
   
    super(props);
    this.state = {};
  }

    
    render() {
      return (
       <Navbar id="topbar" bg="white" variant="light" fixed="top">
        <Container>
        <Navbar.Brand href="#/"><img src="https://www.carfin92.com/wp-content/uploads/2021/02/Carfin92-logo-x1-new.png" alt="carfin92"  /></Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#admin">Admin</Nav.Link>
          <Nav.Link href="#random">Random</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        
      )
    }
  }


  export default Topbar