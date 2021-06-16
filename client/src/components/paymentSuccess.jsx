import Axios from 'axios';
import React, { Component } from 'react'
import {UncontrolledAlert,Alert,Row,Col} from 'reactstrap';
import QRImage from 'react-qr-image'
import {Redirect} from 'react-router-dom';
import ErrorPage from './ErrorPage';
import moment from 'moment'
class paymentSuccess extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             event:{},
             keyDetails:{},
             message:'',warning:false,unauthorized:false

        }
    }
    async componentDidMount()
    {
        try
        {
        const event=this.props.location.state.event;
        const {_id}=event;
        const jwtToken=localStorage.getItem('token');
        const res2=await Axios.post('/api/v1/events/addUser',{event_id:_id},
            {
                headers:{"Authorization":`Bearer ${jwtToken}`}
            }
            )
            console.log('res2 in successpayment',res2);
            if(res2.data.status===200)
            {
                const res=await Axios.post('/api/v1/token/create',{event_id:_id},
                    {
                        headers:{"Authorization":`Bearer ${jwtToken}`}
                    });
                    console.log("res:",res);
                    if(res.data.status===200)
                    {
                    
                        this.setState({event:event,
                            keyDetails:res.data.token,
                            message:res.data.message,
                            warning:res.data.warning,
                            })
                    }
                    else{
                        this.setState({warning:true,message:res.data.message,unauthorized:false})
                    }
                   
            }
            else{
                this.setState({warning:true,message:res2.data.message,unauthorized:false})
            }
        
        
        
        
        // if(res.data.status==='401')
        // {
        //     console.log('in unauth')
        //     this.setState({warning:true,message:res.data.message,unauthorized:res.data.unauthorized})
        // }
        
        
    }
    catch(err)
    {
        console.log('in catch',err);
        this.setState({unauthorized:true});
    }

    }
    

    render() {
        if(!this.state.keyDetails)
        {
            return (<div>LOADING....</div>)
        }
        if(this.state.unauthorized)
        {
            console.log('in unauth')
            return (<ErrorPage message={this.state.message}/>)
        }
        
        const {name,location,date,fees,image}=this.state.event;
        const {key,attendence}=this.state.keyDetails;
        return (
    <div>
        <UncontrolledAlert style={{textAlign:"center",margin:"2vw"}} color={this.state.warning?"warning":"success"}>
                    {this.state.message} 
        </UncontrolledAlert>
        {!this.state.warning?<>
        <Alert style={{textAlign:"center",margin:"2vw"}} color="success">
        <h4 className="alert-heading">Thank You!</h4>
        <p>
          You have successfully registered for the event name "{name}" commencing on "{moment(date).format("MMM Do YYYY")}".Hope You Enjoy the event.
        </p>

        <hr />
        <p className="mb-0">
          "{key}"
        </p>
        <small>Your Secret Key</small>
      </Alert>
      <Row style={{textAlign:"center",margin:"2vw"}}>
          <Col sm="4"></Col>
          <Col sm="4">
          <QRImage  text={key} color="red" />
          </Col>
      
      </Row>
     
      <Alert style={{textAlign:"center",margin:"2vw"}} color="light">
      
        <p>
        This is Your QR Code for the token generated.
        Keep it safe it will help you for marking your attendance.
        You can view this later in your Dashboard.
        </p>

        
        
      </Alert>  
      </>:<Alert style={{textAlign:"center",margin:"2vw"}} color="danger">
        <h2 className="alert-heading">SomeThing went wrong!!</h2></Alert>}
      

                {/* message:{this.state.message}
                Name:{name}
                Location:{location}
                Fees:{fees}
                Date:{date}
                key:{key},
                Attendance:{attendence?"Marked":"Not Marked"} */}
    </div>
        )
    }
}
export default paymentSuccess;