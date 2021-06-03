import React from 'react'

const DataList = ({datalist}) => {

    const {links,mission_name,mission_id,launch_year,launch_success,launch_landing}= datalist
    return (
        <>
        <div className="col col-md-3  mt-3">
           <div class="card" >
  <img class="card-img-top" src={links.mission_patch} className="mx-auto d-block mt-2" alt="Card image" style={{width:"130px", background: "grey",padding:"10px"}} />
  <div class="card-body">
    <h6 class="card-title">{mission_name}</h6>
    <p class="card-text" style={{fontSize:"13px"}}><b>Mission Ids :</b> {
    mission_id.map((item)=>{
        return <ul><li>{item}</li></ul>
    })
    
    
    }
    
    
    </p>
    <p class="card-text" style={{fontSize:"13px"}}><b>launch year :</b> {launch_year}</p>
    <p class="card-text" style={{fontSize:"13px"}}><b>Successfull Launch  :</b> {launch_success}</p>
    <p class="card-text" style={{fontSize:"13px"}}><b>Successfull Landing  :</b> {launch_landing}</p>
  </div>
</div>  
</div>
        </>
    )
}

export default DataList
