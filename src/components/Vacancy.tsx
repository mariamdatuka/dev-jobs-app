import React from 'react'
import { Fieldset } from './Styles';
import icon from '../assets/desktop/icon-location.svg'
import { useNavigate } from 'react-router-dom';

interface Data{
  filteredData:any
}

const Vacancy = ({filteredData}:Data) => {
  const navigate=useNavigate();
  const jobNavigate=(id:number)=>{
    navigate(`/jobdetails/${id}`)
  }
  return (
    <>
    {
      filteredData.map((job:any)=>(
        <Fieldset key={job.id}>
        <legend>
          <img src={icon} alt='icon'/>
        </legend>
        <div>
           <p>{job.postehdAt} <span>{job.contract}</span></p>
           <button onClick={()=>jobNavigate(job.id)}><h3>{job.position}</h3></button> 
           <h4>{job.company}</h4>
           <h5>{job.location}</h5>
        </div>
      </Fieldset>
      ))
    }

    </>
  )
}

export default Vacancy