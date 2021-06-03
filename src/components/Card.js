import React, {useState,useEffect} from 'react'
import DataList from './DataList';

const Card = () => {

    const [myData,setData]= useState([]);


    useEffect(()=>{

        getData();
    },[]);

    const getData = async () =>{

      
            const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014');

            const res1 = await res.json();
    
            console.log(res1);
            
            setData(res1);
        
        
    }

    return (
        <div className="col-md-9">
           <div className="row">
               
        {
        myData.map((item) => {
            return <DataList datalist={item} key={item.flight_number} />
        })

    }
    </div>
        
        </div>
    )
}

export default Card
