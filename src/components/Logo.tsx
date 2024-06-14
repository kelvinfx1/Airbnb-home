import logo from '../assets/Airbnbll-removebg-preview.png'

function Logo() {
  return (
    <div className='md:flex  md:gap-4  hidden md:block '>
     <section className='h-[60px] md:w-[120px]'>
        <img src={logo} alt=""  className='md:w-full md:h-full w-12 '/>
     </section>
     <p className='text-red-400 md:text-2xl font-bold mt-3 ml-0 relative md:right-10 right-7'>airbnb</p>
     
     
    </div>
  )
}

export default Logo