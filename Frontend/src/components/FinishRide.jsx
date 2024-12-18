import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div >
      <h5 onClick={() => {
        props.setFinishRidePanel(false)

      }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5 '>Finish this Ride</h3>
      <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4'>
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
          
          
            <Link to='/captain-home'  className='w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>
            

        
        </div>
      </div>
    </div>
  )
}

export default FinishRide