import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate= useNavigate();
  const [showmenu,setShowmenu]=useState(false)
  const [token,setToken]=useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate("/")} className='w-44 cursor-pointer' src={assets.logo} alt='' />
      <ul className='hidden cursor-pointer md:flex items-start gap-6 font-medium'>
        <NavLink to="/">
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden '/>
        </NavLink>
        <NavLink to="/Docters">
          <li className='py-1 '>ALLDOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to="/About">
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
         
          <NavLink to="/Contact">
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            

      </ul>
      <div className='flex items-center gap-4'>
        {
          token ?< div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt=''/>
            <img className='w-2.5' src={assets.dropdown_icon} alt=''/>
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
          <p onClick={()=>navigate("/MyProfile")} className='hover:text-black cursor-pointer'>MyProfile</p>
          <p onClick={()=>navigate("/MyAppointments")} className='hover:text-black cursor-pointer'>My Appointments</p>
          <p  onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
        </div>
        </div>
          </div>
          :<button onClick={()=>navigate("/Login")} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block '>Create Account</button>
        }
       
       <img onClick={()=>setShowmenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt='' />

       {/* mobile menu */}

       <div className={` ${showmenu ? "fixed w-full" : "h-0 w-0"}  md:hidden right-0 top-0 bottom-0 z-0 overflow-hidden  bg-white transition-all`}>
        <div className='flex items-center justify-between py-6 px-5'>
          <img className='w-36' src={assets.logo} alt=''/>
          <img className='w-7' onClick={()=>setShowmenu(false)} src={assets.cross_icon} alt=''/>

        </div>
        <ul className='flex flex-col gap-2 items-center mt-5 px-5 text-lg font-medium'>
          <NavLink  onClick={()=>setShowmenu(false)} to="/"><p className="px-4 py-2 rounded inline-block">Home</p></NavLink>
          <NavLink  onClick={()=>setShowmenu(false)} to="/Docters"><p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p></NavLink>
          <NavLink  onClick={()=>setShowmenu(false)} to="/About">                                                                                                                                                                       <p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
          <NavLink  onClick={()=>setShowmenu(false)} to="/Contact"><p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>
        </ul>
       </div>


        
      </div>

    </div>
  )
}

export default Navbar
