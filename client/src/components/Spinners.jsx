import React from 'react'
import {
    Spinner 
  } from 'reactstrap';
export default function Spinners() {
    return (
        <div style={{height:"15vw",width:"80%",textAlign:"center",marginTop:"15vw"}}>
                <Spinner type="grow" color="primary" />
                <Spinner type="grow" color="secondary" />
                <Spinner type="grow" color="success" />
                <Spinner type="grow" color="danger" />
                <Spinner type="grow" color="warning" />
                <Spinner type="grow" color="info" />
                <Spinner type="grow" color="light" />
                <Spinner type="grow" color="dark" />
          </div>
    )
}
