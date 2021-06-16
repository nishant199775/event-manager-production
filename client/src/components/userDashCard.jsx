import React, { Component } from 'react'
import {
    Card, Input, CardImg, CardLink,
    CardTitle, CardHeader,Row,Col
  } from 'reactstrap';
  import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
  import moment from 'moment'
export default class userDashCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             item:{},Loaded:false
        }
        

        }
        componentDidMount(){
            
            this.setState({item:this.props.item,Loaded:true})
        }
    
    
    render() {
        if(!this.state.Loaded)
        {
            return (<h2>Loading...</h2>)
        }
        const {name,date,image}=this.state.item.event;
        const {attendance,key}=this.state.item;
        console.log('attendance:',attendance,'key',key)
        return (
            
                <Card  style={{margin:"2vw",padding:"2vw"}}>
                <Row>
                    {/* left */}
                    <Col sm="3">
                    <CardImg top width="100%" src={image} alt="Card image cap" />
                    </Col>
                    <Col sm="1">
                    </Col>
                    {/* middle */}
                    <Col sm="3">
                    <CardTitle className="my-2" style={{textTransform:"uppercase"}} tag="h3"><b>{name}</b></CardTitle>
                    <CardTitle tag="h5" className="lead"><b>SECRET KEY:</b> <span tag="h5"className="my-2">"{key}"</span></CardTitle>
                    <CardTitle tag="h5" className="lead"><b>LINK TO QR CODE:</b> www.qr-code.com/?id="62387263"</CardTitle>
                    </Col>
                    <Col sm="1">
                    </Col>
                    {/* right */}
                    <Col sm="3">
                    <CardTitle tag="h3" className="lead"><b>DATE:</b> {moment(date).format("Do MMM YYYY")}</CardTitle>
                    <InputGroup>
        <InputGroupAddon addonType="append">
           <span tag="h3" className="lead"><b>Attendance Marked:</b> </span> 
          <InputGroupText>
            {attendance?<Input addon type="checkbox" disabled checked  aria-label="Checkbox for following text input" />:<Input addon type="checkbox" disabled   aria-label="Checkbox for following text input" />}
          </InputGroupText>
        </InputGroupAddon>
        
      </InputGroup>
                    </Col>
                    

                </Row>
                </Card>
        
          
        )
    }
}

