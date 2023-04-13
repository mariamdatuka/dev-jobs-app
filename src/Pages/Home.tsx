import Vacancy from '../components/Vacancy'
import {GridContainer,SearchInput,GridItem, LocationInput, CheckInput, SearchButton} from './Styles'
import { useState } from 'react'
import data from '../../data.json'
import Header from '../components/Header/Header'

const Home = () => {
const [singleJob,setSingleJob]=useState<string>('');
const [location,setLocation]=useState<string>('');
const [filteredData, setFilteredData]=useState(data);
const [checked, setChecked]=useState<boolean>(false);

const handleJobInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
  setSingleJob(e.target.value);
}

const handleLocationInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
  setLocation(e.target.value);
}

const searchJob=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
 const filtered=filteredData.filter((job)=>{
    const companyOrPosition=job.company.toLowerCase().includes(singleJob.toLowerCase())||
    job.position.toLowerCase().includes(singleJob.toLowerCase());
    const locationMatch=job.location.toLowerCase().includes(location.toLowerCase());
    const checkedInput=!checked || job.contract==='Full Time';

    if(!singleJob){
      return locationMatch;
    }
    if(!location){
      return companyOrPosition;
    }
    return companyOrPosition && locationMatch && checkedInput;
 });
  setFilteredData(filtered);
  setSingleJob('');
  setLocation('');
  setChecked(false);
}

  return (
    <>
    <form onSubmit={searchJob}>
     <GridContainer>
      <GridItem>
        <SearchInput value={singleJob} onChange={handleJobInput}type='text' placeholder='Filter by title, companies, expertise…'/>
      </GridItem>
      <GridItem>
        <LocationInput value={location} onChange={handleLocationInput} type='text' placeholder='Filter by location'/>
      </GridItem>
      <GridItem style={{display:'flex', alignItems:'center', justifyContent:'center',  gap:'15px'}}>
        <CheckInput>
            <input type="checkbox" name="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)}/>
            <label>Full Time Only</label>
        </CheckInput>
        <SearchButton type='submit'>Search</SearchButton>
      </GridItem>
     </GridContainer>
    </form>
  <Vacancy filteredData={filteredData}/>
    </>
  )
}

export default Home