import React from 'react'

const LocationSearchPanel = (props) => {

  console.log(props);


    //samplearray of location

    const locations =[
      "Sr49, Anand Niwas, satyajit Home near magar, Pune-411028",
      "Sr49, Anand mall, satyajit Home hscbc, Mumbai-411001",
      "Sr49, Anand Banglo, satyajit Home, Banglore-119999",
      "Sr49, Anand House, satyajit Home, Delhi-110001",
    ]

  return (
    <div>

{
  locations.map(function(elem, idx){
    return  <div key={idx} onClick={()=>{
      props.setVehiclePanel(true)
      props.setPanelOpen(false)
    }} className='flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start'> 
                    <h2 className='bg-[#eee] h-8 flex items-center justify-center rounded-full w-12 '><i className="ri-map-pin-2-fill "></i></h2>
                     <h4 className='font-medium'>{elem}</h4>
             </div>
  })
}

           

          

    </div>
  )
}

export default LocationSearchPanel