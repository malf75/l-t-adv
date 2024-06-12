import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import advs from '../../json/adv.json'

import './Carrossel.css'

import 'swiper/css';
import 'swiper/css/pagination';

export default function Carrossel(){
    return(
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          modules={[Pagination, A11y]}
          pagination={{ clickable:true }}
          id='quem-somos'
        >
          {advs.map(adv =>{
            return (
            <SwiperSlide key={adv.oab} style={{display:"flex", alignItems:"center", backgroundColor:"#000000"}}>
            <div className='card'>
            <img className='imagem__card' src={adv.imagem} alt='Foto da Karen'/>
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