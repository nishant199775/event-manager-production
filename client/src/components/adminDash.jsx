import Logo from './logo';
import Piechart from './piechart'
import React from 'react';
import {Redirect} from 'react-router-dom';

const adminDash=()=>
{
    const token=localStorage.getItem('token');
    if(token)
    {
    return(
        <>
        
    <br></br>
    <Piechart/>
    
    </>
    )}
    else{
        return <Redirect to="/"/>
    }
        
}
export default adminDash;