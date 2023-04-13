import Home from './Pages/Home'
import { GlobalStyles } from './GlobalStyles'
import {RouterProvider, createRoutesFromElements, Route, createBrowserRouter} from 'react-router-dom'
import JobDetails from './Pages/Details/JobDetails'
import Root from './Pages/Root'

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
     <>
       <Route path='/'element={<Root/>}>
         <Route index element={<Home/>}/>
         <Route path='/jobDetails/:id' element={<JobDetails/>}/>
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
