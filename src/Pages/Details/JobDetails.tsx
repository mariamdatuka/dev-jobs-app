import {useParams} from 'react-router-dom'
import {Job} from '../../Types'
import logo from '../../assets/logos/coffeeroasters.svg';
import {BasicInfo,Wrapper,Button,MoreInfo,Description} from './Styles'

interface Props{
  filteredData:Job[]
}

const JobDetails = ({filteredData}:Props) => {
    const {id}=useParams<{id?:string}>();
    const parsedID=parseInt(id || '0', 10);
    const data=filteredData.filter((job:any)=>{
     return job.id===parsedID;
    })
    
  return (
     <>
     
         {data.map((job)=>(
           <Wrapper key={job.id}>
              <BasicInfo>
                 <img src={logo} alt='logo'/>
                 <div>
                   <h3>{job.company}</h3>
                   <h4>{job.website}</h4>
                 </div>
                 <Button>Company Site</Button>
              </BasicInfo>
             <MoreInfo>
                 <div>
                   <div>
                     <h5>{job.postedAt}<span>{job.contract}</span></h5>
                     <h2>{job.position}</h2>
                     <p>{job.company}</p>
                   </div>
                   <button>Apply Now</button>
                 </div>
                 <Description>{job.description}</Description>
              </MoreInfo> 
           </Wrapper>
         ))}
       
     </>
  )
}

export default JobDetails