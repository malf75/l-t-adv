import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation } from 'swiper/modules';
import advs from '../../json/adv.json'

import './Carrossel.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { useEffect, useState } from 'react';

export default function Carrossel(){

  const [navigationEnabled, setNavigationEnabled] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      setNavigationEnabled(window.innerWidth > 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigationSettings = navigationEnabled ? {} : false;

    return(
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          modules={[Pagination, A11y, Navigation]}
          navigation={navigationSettings}
          pagination={{ clickable:true }}
          id='quem-somos'
        >
          {advs.map(adv =>{
            return (
            <SwiperSlide key={adv.oab} style={{display:"flex", alignItems:"center", backgroundColor:"#000000"}}>
            <div className='card'>
            <img className='imagem__card' src={adv.imagem} alt='Foto do advogado'/>
            <div className='descricao'>
            <h1 className='nome'>{adv.nome}</h1>
            <p>{adv.resumo}</p>
            <p>{adv.oab}</p>
            </div>
            </div>
            </SwiperSlide>
            )
          })
          
          }
        </Swiper>
        )
}