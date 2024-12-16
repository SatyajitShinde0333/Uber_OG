import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap  from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';


const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const[panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)


  const submitHandler = (e) =>{
      e.preventDefault()

    }
  
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height:'70%',
        padding:24
        
        })
        gsap.to(panelCloseRef.current,{
          opacity:1
        })
    }else{
      gsap.to(panelRef.current, {
        height:'0%',
        padding:0
        })
        gsap.to(panelCloseRef.current,{
          opacity:0
        })
    }
  },[panelOpen])

  
  return (
  
       <div className='h-screen  relative overflow-hidden'>
            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='h-screen w-screen '>
                {/*Temprory img*/ }
                <img className='h-full w- full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=''/> 
            </div>
            <div
                      className='flex flex-col justify-end h-screen absolute top-0 w-full '>
                  <div className='h-[30%] p-6 bg-white relative'>
                  
                  <h5 ref={panelCloseRef} onClick={()=>{
                    setPanelOpen(false)
                  }} className='absolute opacity-0 right-6  top-6 text-2xl'>
                  <i class="ri-arrow-down-s-line"></i>
                  </h5>
                  
                  <h4 className='text-2xl font-semibold'>Find Trip</h4>
                    <form onSubmit={(e) => {
                      submitHandler(e)
                    }}>
                      <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
                  
                        <input 
                        onClick={()=>{
                          setPanelOpen(true)
                        }}
                        value={pickup}
                        onChange={(e) => {
                          
                          setPickup(e.target.value)
                        }}
                        
                        className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
                        type= "text" 
                        placeholder='Add a pick location'
                        
                        />
                       
                       <input 
                       onClick={()=>{
                        setPanelOpen(true)
                      }}
                       value={destination}
                       onChange={(e) => {
                         
                         setDestination(e.target.value)
                       }}
                       className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
                        type= "text" 
                        placeholder='Enter your destination'
                        />
                    </form>
                  </div>
                  <div ref={panelRef} className=' bg-white  h-0'>
                        <LocationSearchPanel />
              </div>
            </div>
            <div  className='fixed w-full z-10 bottom-0 bg-white px-3 py-6'> 
              <h3 className='text-2xl font-semibold mb-5 '>Choose a Vehical</h3>

              <div className=' flex border-2 border-black bg-gray mb-2 rounded-xl items-center p-3 w-full justify-between'>
                <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png' alt='' />
                <div className='-ml-2 w-1/2'>
                  <h4 className='font-medium text-base'>Uber Go<span><i className="ri-user-3-fill"></i>4</span></h4>
                  <h5 className='font-medium text-sm'>2 Mins Away</h5>
                  <p className='font-normal text-xs'>Affordable, Compact, Rides </p>
                </div>
                <h2 className='text-lg font-semibold'>₹777.77</h2>
              </div>
              <div className=' flex border-2 border-black mb-2 rounded-xl items-center p-3 w-full justify-between'>
                <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' alt='' />
                <div className='-ml-2 w-1/2'>
                  <h4 className='font-medium text-base'>Moto<span><i className="ri-user-3-fill"></i>1</span></h4>
                  <h5 className='font-medium text-sm'>4 Mins Away</h5>
                  <p className='font-normal text-xs'>Affordable Moter Ride </p>
                </div>
                <h2 className='text-lg font-semibold'>₹120</h2>
              </div>
              
              <div className=' flex border-2 border-black mb-2 rounded-xl items-center p-3 w-full justify-between'>
                <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png' alt='' />
                <div className='-ml-2 w-1/2'>
                  <h4 className='font-medium text-base'>UberAuto<span><i className="ri-user-3-fill"></i>3</span></h4>
                  <h5 className='font-medium text-sm'>4 Mins Away</h5>
                  <p className='font-normal text-xs'>Affordable Auto Rides </p>
                </div>
                <h2 className='text-lg font-semibold'>₹220.77</h2>
              </div>


            </div>
        </div>

 
  )
}

export default Home