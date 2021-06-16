import React, {ReactDOM,useState, Component, createContext } from 'react';
import { Button,Row,Col,Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateForm=(props)=>
{
const fields=props.fields
const create=(
    <Form>
        {
fields.map((field)=>
 
 <FormGroup>
<Label for={field.name}>{field.name}</Label>
<Input type={field.type} 
 name={field.name}  id={field.name} placeholder={field.name} />
 
</FormGroup>
)}
</Form>
) 
const buttons=props.button
const CreateButton=(
    <Form inline>
        {buttons.map((button)=>
        

        <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
        <Button >{button}</Button>
        </FormGroup>
        )} 
    
    </Form>
);    
return(
    <Row>
          <Col sm={3}></Col>
          <Col sm={5}>
          {create}
          <br></br>
          {CreateButton}
          </Col>
      </Row>
    
)


}
export default CreateForm;