import React from 'react'

const WaitingForDriver = (props) => {
    return (
       
               <div>
            <h5 onClick={() => {
                props.WaitingForDriver(false)
            }} className='p-1 text-center w-[93%] absolute top-0 '>
                <i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i></h5>

            <div className='flex items-center justify-between'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png" alt="" />
                <div className='text-right  '>
                    <h2 className='text-lg font-medium'>Sarthak</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH12 MM 6680</h4>
                    <p className='text-sm text-gray-600'>Maruti Suzuki Swift</p>
                    </div>
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

            </div>
        </div>

     
    )
}

export default WaitingForDriver