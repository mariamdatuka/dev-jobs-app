import Vacancy from '../../components/Vacancy'
import {GridContainer,SearchInput,GridItem, LocationInput, CheckInput, SearchButton,Form,Mobile} from './Styles'
import { useState } from 'react'
import {Job} from '../../Types'
import {themeContext} from '../../App'
import { useContext } from 'react'

interface Props{
  filteredData:Job[],
  setFilteredData: (data: Job[]) => void;
}

const Home = ({filteredData, setFilteredData}:Props) => {
const [singleJob,setSingleJob]=useState<string>('');
const [location,setLocation]=useState<string>('');
const [checked, setChecked]=useState<boolean>(false);

const {isDark}=useContext(themeContext);

const handleJobInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
  setSingleJob(e.target.value);
}

const handleLocationInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
  setLocation(e.target.value);
}

const searchJob=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
 const filtered=filteredData.filter((job:any)=>{
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
    <Form onSubmit={searchJob}>
     <GridContainer isDark={isDark}>
      <GridItem>
        <SearchInput isDark={isDark} value={singleJob} onChange={handleJobInput}type='text' placeholder='Filter by title, companies, expertise…'/>
      </GridItem>
      <GridItem>
        <LocationInput isDark={isDark} value={location} onChange={handleLocationInput} type='text' placeholder='Filter by location'/>
      </GridItem>
      <GridItem>
        <CheckInput isDark={isDark}>
            <input type="checkbox" name="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)}/>
            <label>Full Time</label>
        </CheckInput>
        <SearchButton type='submit'>Search</SearchButton>
      </GridItem>
     </GridContainer>
     <Mobile>
        <SearchInput isDark={isDark} value={singleJob} onChange={handleJobInput}type='text' placeholder='Filter by title, companies, expertise…'/>
      </Mobile>
    </Form>
   <Vacancy filteredData={filteredData}/>
    </>
  )
}

export default Home