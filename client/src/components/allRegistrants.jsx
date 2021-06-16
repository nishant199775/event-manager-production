import React from 'react'
import { useLocation } from 'react-router-dom'
import RecentRegistrants from './recentRegistrants';
import { CardHeader,Card } from 'reactstrap';
export default function AllRegistrants() {
    const location=useLocation();
    const {allRegistrants}=location.state;
    return (
        <div>
            <Card style={{padding:'1vw',margin:"3vw"}}>
           <CardHeader className="my-2"  style={{textTransform:"capitalize",textAlign:"center"}} tag="h1">
         REGISTRANTS</CardHeader> 
         <RecentRegistrants registrants={allRegistrants}/>
         </Card>
        </div>
    )
}
