
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
import "./App.css"
import { Home } from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Navbar1'
import Projects from './Projects'



const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }, []);
  return (
<BrowserRouter>
   {
    loading?
    <div className='preloaderr'>
      <ScaleLoader color={'#f87765'} loading={loading} height={100} margin={10} />
    </div>
    :
    <>
  <Navbar1/>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/Project' element={<Projects/>}></Route>
   </Routes>
    </>

   }
   </BrowserRouter>
  )
}

export default App