import React from 'react'


function Footertwo() {
    const supports=['Help Center','AirCover','Anti Discrimination','Disability Support','Cancellation Options','Report Neighborhood Concern'
      
    ];
    const Hostings =[
      'Airbnb Your Home','AirCovers For Host','Hosting Resources','Community Forum','Hosting Responsibly'
    ];
    const airbnbs =[
      'NewsRoom','New Features','Carrers','Investors','Gift Cards','Airbnb.org emergency stays'
    ]
  return (
    <div  className='ml-36 flex gap-36 mt-7 '>
    <div>
    <p className='font-extrabold'>support</p>
      {supports.map((supoort,index)=>(
        <div className='mt-7 font-semibold' key={index}>
         
          <p>{supoort}</p>
        </div>
      ))}
    </div>
    <div>
    <p className='font-extrabold'>Hosting</p>
      {Hostings.map((hosting,index)=>(
        <div  className='mt-7 font-semibold' key={index}>
         
          <p>{hosting}</p>
        </div>
      ))}
    </div>
    <div>
    <p className='font-extrabold'>Airbnb</p>
      {airbnbs.map((airbnb,index)=>(
        <div  className='mt-7 font-semibold' key={index}>
          
          <p>{airbnb}</p>
        </div>
      ))}
    </div>
   
     
      

    
    </div>
  )
}

export default Footertwo