import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './App.css'
import { useState } from 'react';


function App() {

  const [title,setTitle]=useState('');
  const [date,setDate]=useState('');
  const [des,SetDes]=useState('');


  const addNewExpense = (e)=>{
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL+"addExpense";
    console.log(url);
    fetch(url,{
      method:"POST",
      headers:{'Content-type':'application/json'},
      body: JSON.stringify({title,date,des})
    }).then(res =>{
      res.json().then((json)=>{
        console.log('result',json);
      })
    })
  }

  return (
    <div className='container ' >
    <h1 className='text-center'>Your Expense tracker</h1>
    <Form className='form-style' onSubmit={addNewExpense}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="title">
          <Form.Control 
          type="text"
           placeholder="Title"
           value={title}
           onChange={e => setTitle(e.target.value)}
            />
        </Form.Group>

        <Form.Group as={Col} controlId="date">
          <Form.Control
           type="date"
           value={date}
           onChange={e => setDate(e.target.value)}
             />
        </Form.Group>
      </Row>

    <Row className='mb-3'>
      <Form.Group as={Col} controlId="description">
          <Form.Control
           type="text"
            placeholder="Add Description"
            value={des}
           onChange={e => SetDes(e.target.value)}
             />
        </Form.Group>
        </Row>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default App;


