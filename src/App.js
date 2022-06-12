import React from 'react'
import { Container, Navbar, NavbarBrand,Nav} from 'react-bootstrap'
import './App.css'
import Todo from './component/Todo'

const App = () => {
  
  return (
    <div >
   
   <Navbar bg="danger" variant="dark">
   <Container>
    <Navbar.Brand href="#home"> <i className="fa fa-home fa-home"></i> Todoist</Navbar.Brand>
    <Nav className="auto">
      <Nav.Link href="#home"> <i className="fa fa-user fa-user">  </i></Nav.Link>
      <Nav.Link href="#features"><i className="fa fa-bell fa-bell">  </i></Nav.Link>
      <Nav.Link href="#pricing"><i className="fa fa-facebook fa-facebook ">  </i></Nav.Link>
     </Nav>
     </Container>
    </Navbar>  
   <Todo/>
   
    </div>
  )
}

export default App