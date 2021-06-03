import React,{useState,useEffect} from 'react'
import FilterData from './FilterData';

const Filter = () => {

    const [data,setData]= useState([]);

    useEffect(()=>{
        getYearData();
    });

    const getYearData = async ()=>{

       
            const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true');

            const res1 = await res.json();
    
            console.log(res1);
            
            setData(res1);
       
       

       
    }



    return (
        <div className="col-md-3">
              <h3>Filter</h3>
              <p >Launch Year</p>
            <div className="row mt-3" style={{background:"#fff",borderRadius:"10px",padding:"10px"}}>
             
            {
                data.map((item)=>{
                    return <FilterData fdata={item}/>
                })
            }
            </div>
        </div>
    )
}

export default Filter
