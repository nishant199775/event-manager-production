import React from 'react';

import Example from './colosel';
import Navbar1 from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Feature from './feature';
import Featured from './featured';
import Contact from './contact';
import Dwnapp from './dwnapp';


const home=()=>
{
return(
    <div style={{color:"rgb(136, 134, 134)",backgroundColor:"#a9a8ab"}}>
   
    <Example/>
    <Feature/>
    <Featured/>
    <Contact/>
    <Dwnapp/>
    
    </div>
)
    

}
export default home;