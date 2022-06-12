import React from 'react'
import { Form ,Button, Container, Row, Col } from 'react-bootstrap'


const Login = () => {
  return (
    <div className='con'>
        <Container className='con'>
            
            <Row>
                <Col>
                </Col>
        
            <Col  xs={12} md={6} >
                <Form className='m-2'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Forget password?" />
                    </Form.Group>
                    <Button  variant="danger m-2" className='btn'  type="submit">
                        Submit
                    </Button>
                </Form>

                </Col>

                <Col>
                </Col>

               

                
            </Row>
        </Container>
    </div>

    
  )
}

export default Login