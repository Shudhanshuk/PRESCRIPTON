import React from 'react'
import './index.css'
import { Routes ,Route} from 'react-router-dom'
import HOME from './pages/HOME'
import ABOUT from './pages/ABOUT'
import CONTACT from './pages/CONTACT'
import LOGIN from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Docters from  "./pages/Docters"
import Footer from './components/Footer'
import SpecialityMenu from './components/SpecialityMenu'




function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/Login" element={<LOGIN />} />
      <Route path="/About" element={<ABOUT />} />
      <Route path="/Contact" element={<CONTACT />} />
      <Route path="/Docters" element={<Docters />} />
      <Route path="/doctors/:speciality" element={<Docters />} />
      <Route path="/MyAppointments" element={<MyAppointments />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/Appointment/:docId" element={<Appointment />} />
      

    </Routes>
    <Footer/>
    </div>
  )
}

export default App
