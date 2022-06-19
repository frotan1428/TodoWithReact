import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { useState } from 'react';

const Counter = () => {

    const [counter,setCounter]=useState(0);
    return (
        <div className='body'>
            <Container className='con'>
                <Row>
                    <Col>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className='shadow text-center m-4'  >
                            <Card.Body>
                                <p className='display-4'>Counter</p>
                                 <p className='p'>{counter}</p> <br></br>
                                <Button variant="primary"  onClick={()=> setCounter(counter+1)} className='m-2'>Increment</Button>
                                <Button variant="warning" onClick={()=> setCounter(counter-1)} className='m-2'>Decrement</Button>
                                <Button variant="info" className='m-2' onClick={()=>  setCounter(0)} >Reset</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                    </Col>
                   
                </Row>
            </Container>
        </div>
    )
}
export default Counter;