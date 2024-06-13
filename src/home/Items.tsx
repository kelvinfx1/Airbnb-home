import React from 'react';
import photo1 from '../assets/air1.jpg';
import photo2 from '../assets/air10.jpg';
import photo3 from '../assets/air11.jpg';
import photo4 from '../assets/air12.jpg';
import photo5 from '../assets/air2.jpg';
import photo6 from '../assets/air3.jpg';
import photo7 from '../assets/air4.jpg';
import photo8 from '../assets/air5.jpg';
import photo9 from '../assets/air6.jpg';
import photo10 from '../assets/air7.jpg' ;
import photo11 from '../assets/air8.jpg';
import photo12 from '../assets/airnine.jpg';
import { HeartIcon,PoundSterling,StarIcon } from 'lucide-react';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Scrollbar } from 'swiper/modules';
import 'swiper/css';
import  'swiper/css/navigation';
import  'swiper/css/autoplay';
import  'swiper/css/pagination';
import  'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';






function Items() {
const items =[
  {image:photo1,Image2:photo12,image3:photo5,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo2,Image2:photo10,image3:photo12,image4:photo9, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo8,Image2:photo6,image3:photo11,image4:photo4, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo3,Image2:photo2,image3:photo10,image4:photo5, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo10,Image2:photo7,image3:photo4,image4:photo1, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo11,Image2:photo1,image3:photo2,image4:photo2, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo12,Image2:photo5,image3:photo1,image4:photo8, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo4,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo7,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo5,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo10,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo6,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo9,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo1,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo3,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo7,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo10,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo12,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo2,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  {image:photo6,Image2:photo10,image3:photo12,image4:photo3, icon:HeartIcon,title1:'Halfmoon bay,califonia,US',title2:'22-27 oct. Individual Host',title3:'Beach and Ocean views', title4:"1,634 total"},
  
]

 

 
  return (
    <>
   
 <section className='w-[100vw] '>
 <div className='grid grid-cols-4 gap-6 w-[90vw] ml-[50%] translate-x-[-50%] mt-8 '>
 {items.map((item)=>(
  <div>
    <div className='h-[280px] shadow-xl'>
      
      <Swiper 
        modules={[Navigation,Pagination,Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={()=>console.log('slide change')}
        onSwiper={()=>console.log(Swiper)}
        pagination={{clickable:true}}
        scrollbar={{draggable:true}}
        
        >
            <SwiperSlide><img src={item.image} alt="" className='rounded-xl h-[280px]' /></SwiperSlide>
            <SwiperSlide><img src={item.Image2} alt="" className='rounded-xl h-[280px]' /></SwiperSlide>
            <SwiperSlide><img src={item.image3} alt="" className='rounded-xl h-[280px]' /></SwiperSlide>
            <SwiperSlide><img src={item.image4} alt="" className='rounded-xl h-[280px]' /></SwiperSlide>

        </Swiper>

      
    </div>
    <div className='relative '>
      <HeartIcon className='absolute bottom-[245px] left-64 text-black  z-10' />
    </div>
    <p className='font-bold hover:uppercase'>{item.title1}</p>
    <p className='font-semibold'>{item.title3}</p>
    <p className='font-semibold'>{item.title2}</p>
    <div className='flex underline'>
     <PoundSterling/>
     <p className='font-semibold'>{item.title4}</p>
    </div>
   <section className='flex relative bottom-24 left-[240px]'>
    <StarIcon/>
   <p className='font-extrabold'>5.0</p>
   </section>
  </div>
 ))}
 </div>
 <div className='grid justify-center'>
  <p className='font-bold text-xl relative right-8 mb-5'>
    continue exploring amazing views
  </p>
 <button>
 <section className='h-14 w-60 rounded-2xl bg-black flex justify-center shadow-xl '>
    <p className='text-white font-extrabold text-2xl pt-2'>Show more</p>
  </section>
 </button>
 </div>
 </section>
       
    </>
  )
}

export default Items