import { React, useRef } from 'react'
import { BiSolidDirectionLeft} from 'react-icons/bi'
import {RiDirectionFill} from 'react-icons/ri'
import './Carrousel.css'
export default function Carrosel() {
    const carrosel = useRef(null)

    const onHandleLeft = () =>{
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
    }
    const onHandleRigth = () =>{
       
        carrosel.current.scrollLeft += carrosel.current.offsetWidth;
    }
  return (
    <div className='carroselContainer'>
            <BiSolidDirectionLeft  className='icon-direction'onClick={onHandleLeft}></BiSolidDirectionLeft>
      <div className='carrosel' ref={carrosel}>
  
      
        <div className='item'>
            <div className="image">
            <img src="https://w0.peakpx.com/wallpaper/444/619/HD-wallpaper-porsche-in-black-porsche-cars-black.jpg" alt="" />
            </div>
            <span>car name</span>
        </div>
        <div className='item'>
            <div className="image">
            <img src="https://classic.exame.com/wp-content/uploads/2021/07/Porsche-911-Turbo-S-1.jpg?quality=70&strip=info&w=1024" alt="" />
            </div>
            <span>Porsche</span>
        </div>
    
        <div className='item'>
            <div className="image">
            <img src="https://i.pinimg.com/236x/e4/7a/4f/e47a4fbed82dffff39c181c9a537a69c.jpg" alt="" />
            </div>
            <span >Ferrari P.S</span>
        </div>
        <div className='item'>
            <div className="image">
            <img src="https://i.pinimg.com/originals/8d/16/83/8d1683f43e2eac5d53be5c55e383cdf2.png" alt="" />
            </div>
            <span >BMW M3</span>
        </div>
        <div className='item'>
            <div className="image">
            <img src="https://revistaautomotivo.com.br/wp-content/uploads/2016/07/GTR1.jpg" alt="" />
            </div>
            <span>GTR-Une</span>
        </div>
        <div className='item'>
            <div className="image">
            <img src="https://www.automaistv.com.br/wp-content/uploads/2022/12/Classe-S-63-AMG-1-990x594.jpg" alt="" />
            </div>
            <span >Mercedes C.S</span>
        </div>
        <div className='item'>
            <div className="image">
            <img src="https://medialamborghini-meride-tv.akamaized.net/meride/lamborghini/video/images/folder1/1252/vlcsnap-2023-03-17-16h18m30s840.jpg" alt="" />
            </div>
            <span >Revuelto</span>
        </div>
        <div className='item'>
            <div className="image">
            <img  src="https://quatrorodas.abril.com.br/wp-content/uploads/2019/01/toyota-supra-a90-3.jpg?quality=70&strip=info" alt="" />
            </div>
            <span >Supra MK5</span>
        </div>

       
      </div>
         <RiDirectionFill  className='icon-direction' onClick={onHandleRigth}></RiDirectionFill>
    </div>
  ) 
}
