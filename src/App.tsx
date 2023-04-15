import Home from './Pages/Home'
import { GlobalStyles } from './GlobalStyles'
import {RouterProvider, createRoutesFromElements, Route, createBrowserRouter} from 'react-router-dom'
import JobDetails from './Pages/Details/JobDetails'
import Root from './Pages/Root'
import { useState } from 'react'
import data from './data.json'
import {Job} from './Types'

function App() {
  const [filteredData, setFilteredData]=useState<Job[]>(data);

  const router=createBrowserRouter(
    createRoutesFromElements(
     <>
       <Route path='/'element={<Root/>}>
         <Route index element={<Home filteredData={filteredData} setFilteredData={setFilteredData}/>}/>
         <Route path='/jobDetails/:id' element={<JobDetails filteredData={filteredData}/>}/>
       </Route>
     </>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
      <GlobalStyles/>
    </>
  )
}

export default App
