
import './App.css'
import Container from './componentes/Container'
import logo from '../src/assets/logo.png'
import AdOne from '../src/assets/AdOne.jpg'
import AdTwo from '../src/assets/AdTwo.png'
import AdThree from '../src/assets/AdThree.jpg'
import Flex from './componentes/Flex'
import Image from './componentes/Image'
import Menu from './componentes/Menu'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch,FaUser,FaCaretDown, FaShoppingCart, FaCarSide,FaUndo   } from "react-icons/fa";
import { PiNumberTwoBold } from "react-icons/pi";
import Heading from './componentes/Heading'
import Product from './componentes/Product'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";



function App() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
     


     {/* header part start */}
     <div className="w-full py-[30px]">
      <Container className={"max-w-menuContainer"}>
        <Flex >
          <div className="w-logoW"> 
            <Image imgsrc={logo}/>
          </div>
          <div className="w-menuW">
          <Flex className={"justify-center gap-x-6 "}>
            <Menu menuName={"Home"} className={' '} />
            <Menu menuName={"Shop"} className={' '} />
            <Menu menuName={"About"} className={' r'} />
            <Menu menuName={"Contacts"} className={' '} />
            <Menu menuName={"Journal"} className={' '} />
            
          </Flex>
          </div>
        </Flex>
      </Container>
     </div>
      {/* header part End */}

      {/* category part start  */}
      <div className="w-full bg-categoryBG py-[40px] border border-borderBG">
        <Container className={'max-w-menuContainer'}>
          <Flex className={"items-center"}>
            <div className="w-1/5">
            <Flex className={'gap-x-2'}>
            <HiBars3BottomLeft /> <Heading as='h3' text='Shop by Category' className={'font-dm text-sm text-menuHover'}/>
            </Flex>
            </div>
            <div className="w-3/5 relative">
            <input type="text" className='bg-white p-4 rounded-lg w-full' placeholder='Search Products'/> 
            <FaSearch className='absolute top-1/2 right-5 -translate-y-1/2' />
            </div>
            <div className="w-1/5">
            <Flex className={'justify-end'}>
            <FaUser className='ml-2'/>
            <FaCaretDown className='mr-8' />
            <FaShoppingCart />
            </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* category part  End  */}

      {/* banner part start  */}
      <div className="bg-bannerimg w-full py-[300px] bg-no-repeat bg-cover bg-center"></div>
      {/* banner part end  */}

      {/* information part start  */}
      <div className="w-full py-[30px]">
        <Container className={'max-w-menuContainer'}>
          <Flex className={'justify-between'}>
            <div className="w-[30%]">
              <Flex className={'gap-x-3'}>
              <PiNumberTwoBold />
              <Heading as='h3' text='Two years warranty' className={'font-dm text-sm'}/>
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={'gap-x-3'}>
              <FaCarSide />
              <Heading as='h3' text='Free shipping' className={'font-dm text-sm'}/>
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={'gap-x-3'}>
              <FaUndo />
              <Heading as='h3' text='Return policy in 30 days' className={'font-dm text-sm'}/>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* information part end  */}


      {/* ads part start  */}
      <div className="w-full pt-[170px] pb-[70px]">
        <Container className={'max-w-menuContainer'}>
          <Flex className={'justify-between'}>
              <div className="w-[49%]">
                <img src={AdOne} alt={"AdOne"} />
              </div>
              <div className="w-[49%]">
                <img src={AdTwo} alt={"AdTwo"} />
                <img src={AdThree} alt={"AdThree"} className={'mt-6'} />
              </div>
          </Flex>
        </Container>
      </div>
      {/* ads part End  */}
      
      {/* product part start  */}
      {/* <div className="py-[150px]">
        <Container className={'max-w-menuContainer'}>
          <Flex className={'justify-between'}>
            <div className="w-[24%] relative group" >
              <Product/>
            </div>
            <div className="w-[24%] relative group" >
              <Product/>
            </div>
            <div className="w-[24%] relative group" >
              <Product/>
            </div>
            <div className="w-[24%] relative group" >
              <Product/>
            </div>
          </Flex>
        </Container>
      </div> */}
      {/* product part End  */}

      <Container className={'max-w-menuContainer'}>
      <Slider {...settings}>
      
      <div className=" relative group w-[full] px-2" >
              <Product/>
      </div>
      <div className=" relative group px-2" >
              <Product/>
      </div>
      <div className=" relative group px-2" >
              <Product/>
      </div>
      <div className=" relative group px-2" >
              <Product/>
      </div>
      <div className=" relative group px-2" >
              <Product/>
      </div>

    </Slider>
      </Container>


    </>
  )
}


export default App





