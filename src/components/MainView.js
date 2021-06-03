import React from 'react'
import Card from './Card'
import Filter from './Filter'

const MainView = () => {
    return (
        <div className="container mt-3">
           <h1>SpaceX launch Programs</h1> 
           <div className="row mt-5">
            
                <Filter/>
            
            
                <Card/>

               
           
               </div>
               <h4 style={{textAlign:"center"}}>Developed by : <b>Md Arif Hussain</b></h4>
        </div>
    )
}

export default MainView
