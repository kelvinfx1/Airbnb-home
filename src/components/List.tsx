import {View,Home,TreePalmIcon,SnowflakeIcon,PianoIcon,LucideHome,Drill,ShipIcon,TramFront,TreeDeciduous,TentTreeIcon,SlidersHorizontalIcon}  from 'lucide-react'


function List() {
  return (
    <div className='flex gap-6 justify-center mt-5 w-max overflow-x-auto whitespace-nowrap max-w-full md:ml-32 '>   
    <div className='inline-block'>
      <View className='ml-'/>
      <p>Amazing views</p>
    </div>
    <div>
      <Home className='ml-3'/>
      <p>Cabins</p>
    </div>
    <div>
      <TreePalmIcon className='ml-6'/>
      <p>beachfront</p>
      </div>
      <div >
        <SnowflakeIcon className='ml-2 '/>
        <p>skiiing</p>

      </div>
      <div>
<PianoIcon className='ml-3'/>
<p>
  Grand pionos
</p>
      </div>
      <div>
        <LucideHome className='ml-5'/>
        <p>Mansions</p>
      </div>
      <div>
        <Drill className='ml-3'/>
        <p>OMG!</p>
      </div>
      <div>
        
        <TramFront/>
        <p>Luxe</p>
      </div>
      <div  className=''>
        <ShipIcon className='ml-2'/>
        <p>Boats</p>
      </div>
      <div>
        <TreeDeciduous className='ml-6'/>
        <p>LakeFront</p>
      </div>
      <div>
       <TentTreeIcon className='ml-6'/>
       <p>Treehouse</p>
      </div>
      <div className='border-gray-300 border-2 rounded-xl h-7 w-7 flex justify-center font-extrabold text-2xl '>
       <p className='relative bottom-2 hidden md:block'>
       <button>
       {'>'}
       </button>
       </p>
      </div>
      <div className='flex gap-2 border-2 border-gray-400 rounded-md h-9'>
       
       <SlidersHorizontalIcon className='mt-1 hidden md:block'/>
      <p className='mt-1 font-medium hidden md:block'>Filters</p>
      
      </div>


    </div>
  )
}

export default List