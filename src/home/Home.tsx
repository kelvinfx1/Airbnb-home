import Items from './Items'
import Header from './Header'
import Footer from './footer/Footer'
import SpalshScreen from '../components/Splash'

function Home() {
  return (
    <>


   <div id='home' className='w-[100vw] overflow-hidden  '>
    <SpalshScreen/>
   <Header />
    <Items />
    <Footer/>
   </div>
    </>
  )
}

export default Home