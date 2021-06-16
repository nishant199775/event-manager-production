import React, { Component } from 'react'
import { Button,Form, FormGroup, Label, Input,Row,Col} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import moment from 'moment'
 class registerForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             event:{},active:false
        }
        
    }
    componentDidMount(){
        console.log(this.props.location.state.event);
        this.setState({event:this.props.location.state.event,active:true});
    }
    handlePayment=(e)=>{
        e.preventDefault();
        this.props.history.push({
            pathname:'/paymentSuccess',
            state:{event:this.state.event}
        })

    }
    
    
    render() {
        if(!this.state.active)
        {
            return(<>Loading....</>);
        }

        const {name,fees,date,type,location}=this.state.event;
        return (
            <Form style={{margin:"5vw 10vw",border:"2px solid black",padding:"2vw",backgroundColor:"rgba(6, 4, 15, 0.32)",color:"white",borderRadius:"12px"}}>
            <h2 style={{textAlign:"center",padding:"1vw",borderRadius:"12px",marginBottom:"2vw",backgroundColor:"rgba(7, 4, 3, 0.7)"}}>Confirmation</h2>
        <FormGroup row>
        <Label for="Name" sm={2}>Name</Label>
        <Col sm={10}>
          <Input type="name" name="name" disable="true" value={name} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Date</Label>
        <Col sm={10}>
          <Input type="text" name="email"  disable="true" value={moment(date).format("Do MMM YYYY")} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Type</Label>
        <Col sm={10}>
          <Input type="text" name="password" disable="true" value={type} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Location</Label>
        <Col sm={10}>
          <Input type="text" disable="true" value={location} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleRole" sm={2}>Fees</Label>
        <Col sm={10}>
          <Input type="text" disable="true" value={fees}>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col  style={{textAlign:"center"}}>
          <Button onClick={this.handlePayment}>Pay Now</Button>
          <Button style={{margin:"2vw"}} >Cancel</Button>
        </Col>
      </FormGroup>
      </Form>  
      
        )
    }
}
export default withRouter(registerForm)