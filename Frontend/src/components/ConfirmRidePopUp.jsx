import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('')

  const submitHander =(e)=>{
    e.preventDefault()
  }
  return (
    <div >
      <h5 onClick={() => {
        props.setRidePopupPanel(false)

      }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5 '>Confirm this ride to Start</h3>
      <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
        <div className='flex items-center gap-3'>
          <img className='h-12 rounded-full object-cover w-10' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
          <h2 className='text-lg font-medium'>Robin Roy</h2>

        </div>
        <h5 className='text-lg font-semibold'>2.7 Km</h5>
      </div>
      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 py-2 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Pune, Maharastra</p>
            </div>
          </div>
          <div className='flex items-center gap-5 py-2 border-b-2'>
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Pune, Maharastra</p>
            </div>
          </div>
          <div className='flex items-center gap-5 py-2 '>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹220</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>

        </div>



        <div className='mt-6 w-full'>
          <form onSubmit={(e)=>{
            submitHander(e)

          }}>
            <input value={otp} onChange={(e)=>setOtp(e.target.value)} className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter OTP' />
            <Link to='/captain-riding' onClick={() => {

            }} className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</Link>
            <button onClick={() => {
              props.setConfirmRidePopupPanel(false)
              props.setRidePopupPanel(false)

            }} className='w-full mt-2 text-lg bg-red-600 text-white font-semibold p-3 rounded-lg'>Cancel</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default ConfirmRidePopUp