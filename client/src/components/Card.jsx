import React,{Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader
} from 'reactstrap';
import {withRouter} from 'react-router-dom'

 class makeCard extends Component {
  constructor(props)
  {
    super(props);
    this.state={reload:false}
    this.handleRegister=this.handleRegister.bind(this);
    this.handleKnowMore=this.handleKnowMore.bind(this);
  }
  
  handleRegister=(e)=>{
    e.preventDefault();
      
      const id=e.target.id;
      console.log(id)
       this.props.history.push({
         pathname:'/registerForm',
         state:{event:this.props.event}
       });
  }

  handleKnowMore=(e)=>{
    
    e.preventDefault();
      
      const id=e.target.id;
      console.log(id)
       this.props.history.push({
         pathname:'/eventDetails',
         state:{eventId:id,reloadPage:this.reloadPage}
       });
  }

  render() {
    return (
      
        <Card style={{margin:'50px',marginLeft:'100px',padding:'20px',color:"white",backgroundColor:"rgba(12, 12, 7, 0.6)"}}>
        <CardHeader style={{textTransform:'uppercase',backgroundColor:"rgba(191, 180, 172, 0.47)"}}tag="h3">{this.props.title}</CardHeader>
        <CardImg top width="100%" height="300px" src={this.props.img} alt="abc.com" />
        <CardBody>
         
          {/* <CardSubtitle>{props.subtitle}</CardSubtitle> */}
            <CardText>{this.props.text}</CardText>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <Button id={this.props.id} onClick={this.handleKnowMore} color="success">{this.props.button1}</Button>
          <Button style={{float:"right",marginLeft:"1vw"}} id={this.props.id} onClick={this.handleRegister} color="success">{this.props.button2}</Button>
           </div>
          
          
        </CardBody>
      </Card>
   
        
      
    );
  };
};
export default withRouter(makeCard);

