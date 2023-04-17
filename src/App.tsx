import React, { createContext } from 'react'
import Home from './Pages/Home/Home'
import  {GlobalStyles}  from './GlobalStyles'
import {RouterProvider, createRoutesFromElements, Route, createBrowserRouter} from 'react-router-dom'
import JobDetails from './Pages/Details/JobDetails'
import Root from './Pages/Root'
import { useState } from 'react'
import data from './data.json'
import {Job} from './Types'

interface themeType{
  isDark:boolean;
  handleToggle?:()=>void;
}

export const themeContext=createContext<themeType>({}as themeType);

function App() {
  const [filteredData, setFilteredData]=useState<Job[]>(data);
  const [isDark,setIsDark]=useState<boolean>(false);

  const handleToggle=()=>{
    setIsDark(!isDark);
  }
 
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
     <themeContext.Provider value={{isDark,handleToggle}}>
      <RouterProvider router={router}/>
      <GlobalStyles isDark={isDark}/>
      </themeContext.Provider>
    </>
  )
}

export default App
