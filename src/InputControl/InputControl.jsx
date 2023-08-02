import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import styles from "./InputControl.css"

function InputControl(props) {
  return (
    // <div size='sm'>
    //     { <label>{props.label}</label>}
    //     <input type="text" {...props} className='form-control' />
    // </div>
    <Form style={{ maxWidth: '500px'}} className='mx-auto'>
        <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
          {<Form.Label column sm="2">
            {props.label}
          </Form.Label>}
          <Col sm="10">
            <Form.Control type="text" {...props}/>
          </Col>
        </Form.Group>
    </Form>
  )
}

export default InputControl