import React from 'react';
import EventForm from './form';
const fields= [{name:"Name of Event",type:"name"},
    {name:"Registration Fees",type:"number"},
    {name:"Details",type:"textarea"},
    {name:"Image URL",type:"url"},
    {name:"Type of Event",type:"text",option:[1,2,3]}
    ];
const createEvent=()=>
{
    return( 
    <EventForm fields={fields} button={["Submit","Cancel"]}/> 
    
    )
}
export default createEvent;