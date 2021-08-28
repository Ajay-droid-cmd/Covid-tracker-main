import React from 'react';
import { useState, useEffect } from 'react';

export const Statewise = ()=>{

  const [stateData,setstatedata]=useState([])
  useEffect(() => {
  const fetchdata=()=>{
  let api_key='https://data.covid19india.org/data.json';
  // let api_key='https://data.covid19india.org/v4/min/data.min.json';
  fetch(api_key)
  .then((response)=>response.json())
  .then((data)=>{
    console.log(data.statewise)
  setstatedata(data.statewise)
  })
  }
  
  fetchdata()
  }, [])
  
  
  return(

  <table class="table table-striped" style={{backgroundColor:"white",margin:"auto",width:"80vw"}}>
    <thead className="thead-dark">
      <tr>
        <th scope="col">Row</th>
        <th scope="col">State</th>
        <th scope="col">Confirmed</th>
        <th scope="col">Recovered</th>
        <th scope="col">Dead</th>
        <th scope="col">Active</th>
        <th scope="col">Updated</th>
      </tr>
    </thead>
    <tbody>
  
    {
      stateData.map((stateData,idx)=>{
        return(
          <tr key={idx}>
        <th scope="row">{idx+1}</th>
        <th scope="col">{stateData.state}</th>
        <th scope="col">{stateData.confirmed}</th>
        <th scope="col">{stateData.recovered}</th>
        <th scope="col">{stateData.deaths}</th>
        <th scope="col">{stateData.active}</th>
        <th scope="col">{stateData.lastupdatedtime}</th>
      </tr>
        )
      })
    }
      
    </tbody>
  </table>
  )}
  