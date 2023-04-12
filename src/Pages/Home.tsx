import Vacancy from '../components/Vacancy'
import { Background,SwitchContainer,SwitchInput,SwitchKnob,Container,Wrapper,GridContainer,SearchInput,GridItem, LocationInput, CheckInput, SearchButton} from './Styles'
import { useState } from 'react'
import data from '../../data.json'

const Home = () => {


const [singleJob,setSingleJob]=useState<string>('');
const [location,setLocation]=useState<string>('');
const [filteredData, setFilteredData]=useState(data)

const handleJobInput=(e:any)=>{
  setSingleJob(e.target.value);
}

const handleLocationInput=(e:any)=>{
  setLocation(e.target.value);
}

const searchJob=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
 const filtered=filteredData.filter((job)=>{
    const companyOrPosition=job.company.toLowerCase().includes(singleJob.toLowerCase())||
    job.position.toLowerCase().includes(singleJob.toLowerCase());
    const locationMatch=job.location.toLowerCase().includes(location.toLowerCase());

    if(!singleJob){
      return locationMatch;
    }
    if(!location){
      return companyOrPosition;
    }
    return companyOrPosition && locationMatch;
 });
  setFilteredData(filtered);
  setSingleJob('');
  setLocation('');
}

  return (
    <>
    <Background>
      <Wrapper>
        <h2>Dev Jobs</h2>
       <Container> 
         <svg width="20" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.635c.33 0 .612.295.612.639v1.89c0 .344-.282.638-.612.638s-.612-.294-.612-.638v-1.89c0-.344.282-.639.612-.639zm-4.488-1.783c.27.262.27.68 0 .941L4.03 16.231a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.7-.261.97 0zm9.946 0l1.483 1.438c.27.261.27.68 0 .941a.698.698 0 01-.97 0l-1.483-1.438a.649.649 0 010-.94c.242-.262.674-.262.97 0zM10 4.552c1.396 0 2.685.525 3.598 1.4.913.85 1.504 2.05 1.504 3.35 0 1.3-.59 2.5-1.504 3.35a5.314 5.314 0 01-3.598 1.4c-1.396 0-2.685-.525-3.598-1.4-.913-.85-1.504-2.05-1.504-3.35 0-1.3.564-2.5 1.504-3.35A5.314 5.314 0 0110 4.552zM2.607 8.906c.355 0 .658.274.658.594 0 .32-.303.594-.658.594H.658C.304 10.094 0 9.82 0 9.5c0-.32.304-.594.658-.594h1.95zm16.735 0c.354 0 .658.274.658.594 0 .32-.304.594-.658.594h-1.95c-.354 0-.657-.274-.657-.594 0-.32.303-.594.658-.594h1.949zM4.03 2.77l1.482 1.438c.27.261.27.68 0 .94-.242.262-.674.262-.97 0L3.059 3.71a.649.649 0 010-.941c.27-.261.701-.261.97 0zm12.91 0c.27.261.27.68 0 .941l-1.482 1.438a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.701-.261.97 0zM10 .198c.33 0 .612.294.612.638v1.89c0 .344-.282.639-.612.639s-.612-.295-.612-.639V.836c0-.344.282-.638.612-.638z" fill="#FFF" fill-rule="nonzero"/></svg>
        <SwitchContainer>
          <SwitchInput type="checkbox" />
          <SwitchKnob />
       </SwitchContainer>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c1.516 0 2.925.566 3.978 1.523A3.979 3.979 0 008 1a4.014 4.014 0 00-2.821 1.179A3.927 3.927 0 004 5c0 1.095.463 2.105 1.179 2.821A3.927 3.927 0 008 9a4.034 4.034 0 003.974-3.548c.017.18.026.364.026.548a6.02 6.02 0 01-1.768 4.232A6.02 6.02 0 016 12a5.89 5.89 0 01-4.232-1.768A6.02 6.02 0 010 6a5.89 5.89 0 011.768-4.232A6.02 6.02 0 016 0z" fill="#FFF" fill-rule="nonzero"/></svg>
      </Container> 
    </Wrapper>
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
            <input type="checkbox" name="checkbox" />
            <label>Full Time Only</label>
        </CheckInput>
        <SearchButton type='submit'>Search</SearchButton>
      </GridItem>
     </GridContainer>
    </form>
  </Background>
  <Vacancy filteredData={filteredData}/>
    </>
  )
}

export default Home