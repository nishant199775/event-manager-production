import React, { Component } from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, 
    CardSubtitle, CardBody,UncontrolledCollapse
  } from 'reactstrap';
  import {withRouter} from 'react-router-dom'
  import moment from 'moment';
  import {Redirect} from 'react-router-dom';

 class similarEvents extends Component {
    constructor(props) {
        super(props);
        this.state={render:null,id:""};
        this.handleKnowMore=this.handleKnowMore.bind(this);
    }
    handleRegister= (e)=>{
    
        e.preventDefault();
          
          
            this.props.history.push({
            pathname:'/registerForm',
            state:{ event:this.props.event}
           
          })
          
           
      }
      handleKnowMore=async (e)=>{
    
        e.preventDefault();
          
          const id=e.target.id;
          console.log(id);
           await this.props.history.push({
            pathname:'/eventDetails',
            state:{eventId:id}
          })
          console.log('after push in similar')
          this.props.reloadPage();
           
      }

    render() {
        const event=this.props.event;
        console.log('in similar:',event);
        const {_id,name,date,image,type,fees,description}=event;
        return (
            <Card >
        <CardImg top height="200vw" width="100%"  src={image} alt="Card image cap" />
        <CardBody >
          <CardTitle tag="h4" style={{textTransform:"capitalize",textAlign:"center"}}>{name}</CardTitle>
          <CardSubtitle tag="h5"  className="mb-2 text-muted">Rs: {fees}</CardSubtitle>
          <CardText className="lead">Date:{moment(date).format("MMM Do YYYY")}</CardText>
          <div style={{display:"flex",justifyContent:"space-between"}}>
    
          <Button id={_id} onClick={this.handleKnowMore} style={{ marginBottom: '1rem' }}>Know More</Button>
          <Button id={_id} style={{ marginBottom: '1rem' }} onClick={this.handleRegister}>Register</Button>
          </div>
          {/* <UncontrolledCollapse toggler="toggler">
          <Card>
            <CardBody>
                {description}
            </CardBody>
          </Card>
        </UncontrolledCollapse> */}
          
          
        </CardBody>
      </Card>
        )
    }
}
export default withRouter(similarEvents)