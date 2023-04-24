import {useParams} from 'react-router-dom'
import {Job} from '../../Types'
import {BasicInfo,Wrapper,Button,MoreInfo,Description, Requirements} from './Styles'
import {themeContext} from '../../App';
import { useContext } from 'react';

interface Props{
  filteredData:Job[]
}

const JobDetails = ({filteredData}:Props) => {
    const {id}=useParams<{id?:string}>();
    const parsedID=parseInt(id || '0', 10);
    const data=filteredData.filter((job:any)=>{
     return job.id===parsedID;
    })
    
    const {isDark}=useContext(themeContext);
  return (
     <>
     
         {data.map((job)=>(
           <Wrapper key={job.id}>
              <BasicInfo isDark={isDark}>
                 <img src={job.logo} alt='logo'/>
                 <div>
                   <h3>{job.company}</h3>
                   <h4>{job.website}</h4>
                 </div>
                 <Button>Company Site</Button>
              </BasicInfo>
             <MoreInfo isDark={isDark}>
                 <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px'}}>
                   <div style={{display:'flex', flexDirection:'column', gap:'7px'}}>
                     <h5>{job.postedAt}/<span>{job.contract}</span></h5>
                     <h2>{job.position}</h2>
                     <p>{job.location}</p>
                   </div>
                   <button>Apply Now</button>
                 </div>
                 <Description>{job.description}</Description>
                 <Requirements isDark={isDark}>
                    <p>Requirements</p>
                    <div>{job.requirements.items.map((item,index)=>(
                      <li key={index}>
                          {item}
                      </li>
                    ))}</div>
              </Requirements>
              </MoreInfo> 
           </Wrapper>
         ))}
       
     </>
  )
}

export default JobDetails