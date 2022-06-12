import React from 'react'
import { useState ,useEffect} from 'react';
import { Container, Col, Row, Card, Button, Form } from 'react-bootstrap'

 





var today = new Date();

var date = today.toLocaleString("en-US", { weekday: "short", day: '2-digit', month: "long", })

const Todo = () => {
  
//hook for holding all the tasks
const [todos, setTodos] = useState([]);

//hook for getting the data from the input field
const [newTodo, setNewtodo] = useState();

//function for storing the data into local Storage
const saveData = (newtask) => {
  localStorage.setItem("tasks", JSON.stringify(newtask));
}

//function for adding the new todo task
const AddTodo = () => {
  let myTodos = [...todos, { todo: newTodo, id: Date.now() }];
  setTodos(myTodos);
  //empty the input field
  setNewtodo("");

  saveData(myTodos);
}

//function for deleting the todos from local Storage as well
const deleteTodo = (id) => {
  let deltodo = todos.filter((todo) => todo.id !== id);
  setTodos(deltodo);

  //also need to update this from local Storage
  saveData(deltodo);
}

//using the useEffect hook for showing the taks immediently 
useEffect(() => {
  if (localStorage.getItem("tasks")) {
    //then pass the localStorage data to my hook that is holding all the tasks
    setTodos(JSON.parse(localStorage.getItem("tasks")));
  }
}, [])
  return (
    <div>
      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col sm={4} md={8}>
          
            <Form className='text-center m-4'>
            <table className='table table-info' >
            <tr>
              <th>ToDo List </th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
            {
              todos.map((tod) => (
                <tr>
                  <td>{tod.todo}</td><br/>
                  <td><Button onClick={() => deleteTodo(tod.id)} className="btn btn-danger"> <i className="fa fa-remove fa-remove"/></Button></td>
                    <td><Button onClick={() => deleteTodo(tod.id)} className="btn btn-info "> <i className="fa fa-edit fa-edit"/></Button></td>

                </tr>
              ))
            }
      </table>
              

              <Form.Group className="mb-4">
                <p className='text-left'> <strong>Today</strong> {date} </p>
                <Form.Control as="textarea" value={newTodo} onChange={(e) => setNewtodo(e.target.value)}  rows={5} placeholder="Task Name" />
              </Form.Group>
                <Button variant="dark"  ><i className="fa fa-edit fa-edit"/></Button>{' '}
                <Button variant="danger"  onClick={AddTodo}  ><i className="fa fa-plus fa-plus"/></Button>

            </Form>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>

    </div>
  )
}

export default Todo