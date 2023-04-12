import React from 'react'
import { Fieldset } from './Styles';
import icon from '../assets/desktop/icon-location.svg'

interface Data{
  filteredData:any
}

const Vacancy = ({filteredData}:Data) => {
  return (
    <>
    {
      filteredData.map((job:any)=>(
        <Fieldset key={job.id}>
        <legend>
          <img src={icon} alt='icon'/>
        </legend>
        <div>
           <p>{job.postedAt} <span>{job.contract}</span></p>
           <h3>{job.position}</h3>
           <span>{job.company}</span>
           <h5>{job.location}</h5>
        </div>
      </Fieldset>
      ))
    }

    </>
  )
}

export default Vacancy