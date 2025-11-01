import React from 'react'
import HEADER from '../components/HEADER'
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from '../components/topDoctors';
import Banner from '../components/Banner';


const HOME = () => {
  return (
    <div>
      <HEADER/>
      <SpecialityMenu />
      <TopDoctors/>
      <Banner/>
      
      
    </div>
  )
}

export default HOME
