import  { useEffect } from 'react'
import Footertwo from './Footertwo';
import { GlobeIcon,PoundSterling,FacebookIcon,TwitterIcon,InstagramIcon,MapIcon } from 'lucide-react';
import aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

function Footer() {
    const lists=[
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Flat rentals"},
        { top:"Aberfeldy",down:"Villa rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"}
    ];
    useEffect(() => {
        aos.init({
          duration: 2000, // You can customize the animation duration here
          easing: 'ease-in-out', // Default easing for AOS animations
          once: false, // Whether animation should happen only once - while scrolling down
          mirror: true , // Whether elements should animate out while scrolling past them
        });
      }, []);
  return (
   <>
    <div className='bg-gray-200' data-aos='fade-up'>
    <div className='ml-[50%] translate-x-[-80%] mt-6 '>
        <p className='font-bold'>Inspirtion for future getaways </p>
        <ul className='flex gap-6 font-semibold mt-2 md:w-[60vw] w-[100vw] flex-wrap'>
            <li className='hover:underline'>Popular</li>
            <li className='hover:underline'>Historic</li>
            <li className='hover:underline'>Coastal</li>
            <li className='hover:underline'>Island</li>
            <li className='hover:underline'>Lakes</li>
            <li className='hover:underline'>Unique stays</li>
            <li className='hover:underline'>Categories </li>
            <li className='hover:underline'> Things to do</li>
        </ul>
        <hr className='border-black border-1 w-[100vw]' />
        <div className='grid md:grid-cols-6 w-[80vw] gap-8 mt-5 grid-cols-3'>
            {lists.map((list,index)=>(
                <div key={index} >
                    <p className='font-bold'>{list.top}</p>
                <p>{list.down}</p>
                </div>
                
            ))}
            
        </div>
        

    </div>
    <hr className='border-black mt-7' />
    <Footertwo/>
    <hr  className='mt-6 border-black' />
    <div className='md:flex justify-between md:w-[80vw] md:ml-[50%] md:translate-x-[-50%] md:mt-4 mt-2 ml-5'>
        <div className='relative flex'>
        <p className='font-semibold mb-9 mt-6'>
        &copy; 2024 Airbnb,inc. <span className='relative bottom-1 font-bold'>.</span>Privacy <span className='relative bottom-1 font-bold'>.</span>terms <span className='relative bottom-1 font-bold'>.</span>sitemap <span className='relative bottom-1 font-bold'>.</span>UK Modern Slavery Act <span className='relative bottom-1 font-bold'>.</span>Company details
    </p>
<Link to='/opps'>
<section className='md:w-[120px] h-7 rounded-2xl bg-black flex gap-2 absolute md:left-[580px] md:bottom-14 bottom-[105px] left-36 '>
                <p className='text-white ml-2'>showmap</p>
                <MapIcon className='text-white'/>

            </section>
</Link>
        </div>
        <div className='flex gap-3 relative mb-7'>
            <GlobeIcon/>
            <p className='font-semibold'>English(GB)</p>
            <PoundSterling/>
            <p className='font-semibold'>GBP</p>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            

        
        </div>
    </div>
    </div>
   </>
    
  )
}

export default Footer