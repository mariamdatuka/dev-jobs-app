import { Fieldset,GridContainer } from './Styles';
import { useNavigate } from 'react-router-dom';
import {Job} from '../Types'

interface Data{
  filteredData:Job[]
}

const Vacancy = ({filteredData}:Data) => {
  const navigate=useNavigate();
  const jobNavigate=(id:number)=>{
    navigate(`/jobdetails/${id}`)
  }
  return (
    <>
    <GridContainer>
    {
      filteredData.map((job)=>(

        <Fieldset key={job.id}>
        <legend>
          <img src={job.logo} alt='icon'/>
        </legend>
        <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
           <p>{job.postedAt}. <span>{job.contract}</span></p>
           <button onClick={()=>jobNavigate(job.id)}><h3>{job.position}</h3></button> 
           <p>{job.company}</p>
           <h5>{job.location}</h5>
        </div>
      </Fieldset>
      ))
    }
    </GridContainer>
    </>
  )
}

export default Vacancy