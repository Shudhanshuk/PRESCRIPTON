import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

function Appointment() {
  const {docId}=useParams()
  const {doctors,currencySymbole}=useContext(AppContext )
  const dayofweek=["SUN","MON","TUE","WED","THU","FIR","SAT"]
  const [docInfo,setDocInfo]=useState(null)
  const [docslots,setDocslots]=useState([])
  const [SlotIndex,setSlotIndex]=useState(0)
  const [SlotTime,setSlotTime]=useState("")



  const fetchDocInfo=async()=> {
    const docInfo=doctors.find(doc=>doc._id===(docId)) 
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  const getAvailableSlots=async()=>{
    setDocslots([])
    let today = new Date()
    for(let i=0;i<7;i++){
      // gettime date with index
      let currentdate = new Date(today)
      currentdate.setDate(today.getDate() + i)

      // setting end time of the date with index
      let endTime=new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21,0,0,0)

      // setting hours
      if(today.getDate()===currentdate.getDate()){
         currentdate.setHours(currentdate.getHours()>10 ? currentdate.getHours()+1:10)
         currentdate.setMinutes(currentdate.getMinutes()> 30 ? 30 : 0)

      }
      else{
        currentdate.setHours(10)
        currentdate.setMinutes(0)

      }
      let timeSlots=[]
      while(currentdate<endTime){
        let formatedtime = currentdate.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true
        }).toLowerCase()
        
        // add slot to array
        timeSlots.push({
          datetime:new Date(currentdate),
          time:formatedtime

        })
        //increment current time by 30 minutes
        currentdate.setMinutes(currentdate.getMinutes()+30)


      }
      setDocslots(prev => ([...prev,timeSlots]))
    }

  }
  useEffect(() => {
    fetchDocInfo()
    }, [doctors ,docId])

    useEffect(()=>{
      getAvailableSlots()
      },[docInfo])

      useEffect(()=>{
        console.log(docslots)
        },[docslots])
    
    
  return docInfo && (
    <div>
      {/* doctors details */}
      <div className='flex flex-col sm:flex-row gap-4 '>
        <div>
          <img className='bg-primary w-full sm: max-w-72 rounded-lg' src={docInfo.image} alt=''/>  
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            {/* doc info : name, degree, experience */}
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
              {docInfo.name}
              <img className='w-5' src={assets.verified_icon} alt=''/>
               
            </p>
            <div className='flex items-center gap=2 text-sm mt-1 text-gray-600 '>
              <p>
                {docInfo.degree}
                {docInfo.speciality}
              </p>  
              <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
            </div>
            {/* doctors abouts */}
            <div>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'> 
                About <img src={assets.info_icon} />
              </p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
            </div>
            <p className='text-gray-500 font-medium mt-4'>
              Appointement fee:<span className='text-gray-600'>{currencySymbole}{docInfo.fees}</span>
            </p>

        </div>
      </div>
      {/* booking slouts */}
      <div className='sm:ml-72 sm:pl-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
        {
            docslots.length && docslots.map((item, index) => (
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${SlotIndex===index ? "bg-primary text-white":"border border-gray-200" }`} key={index}>
                <p>{item[0]&&dayofweek[item[0].datetime.getDay()]}</p>
                <p>
                 {item[0]&& item[0].datetime.getDate()} 
                </p>
              </div>
            ))
            }
            
          
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docslots.length && docslots[SlotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===SlotTime?"bg-primary text-white ":"text-gray-400 broder border-gray-300"}` } key={index}>
              {item.time.toLowerCase()}
            </p>
          ))  }
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
      </div>
          {/* listing Related Doctors */}
          <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>

    </div>
  )
}

export default Appointment
