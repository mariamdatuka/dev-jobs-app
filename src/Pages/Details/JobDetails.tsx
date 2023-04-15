import {useParams} from 'react-router-dom'
import {Job} from '../../Types'

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
       <div>
         {data.map((job)=>(
           <div key={job.id}>
              {job.website}
           </div>
         ))}
       </div>
     </>
  )
}

export default JobDetails