import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

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
          <SwiperSlide style={{display:"flex", alignItems:"center", backgroundColor:"#000000"}}>
            <div className='card'>
            <img className='imagem__card' src='./images/karen.jpg' alt='Foto da Karen'/>
            <div className='descricao'>
            <h1 className='nome'>Karen Marianne dos Santos Lima</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at efficitur eros. Nam pharetra felis vitae urna blandit venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis laoreet mauris vel pulvinar aliquet. Fusce aliquam porta odio, vel imperdiet urna vehicula non. Nullam mattis libero justo, ac fringilla ex elementum eu. Nullam fringilla dui quis ornare rutrum. Vestibulum lacinia condimentum arcu non placerat. Aenean vehicula finibus nisi. Duis nunc ligula, blandit eget leo quis, eleifend ornare lorem. Nulla placerat semper risus, quis placerat felis suscipit at. Donec sit amet venenatis ipsum, nec hendrerit justo. Nam in maximus dui. Curabitur sollicitudin metus quis lacus tempus dapibus. Etiam sit amet augue dictum, faucibus neque ut, commodo libero. Vestibulum fermentum leo non orci tincidunt interdum sed ut nunc.</p>
            <p>OAB/AL 11.086</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{display:"flex", alignItems:"center", backgroundColor:"#000000"}}>
            <div className='card'>
            <img className='imagem__card' src='./images/karen.jpg' alt='Foto da Karen'/>
            <div className='descricao'>
            <h1 className='nome'>Karen Marianne dos Santos Lima</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at efficitur eros. Nam pharetra felis vitae urna blandit venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis laoreet mauris vel pulvinar aliquet. Fusce aliquam porta odio, vel imperdiet urna vehicula non. Nullam mattis libero justo, ac fringilla ex elementum eu. Nullam fringilla dui quis ornare rutrum. Vestibulum lacinia condimentum arcu non placerat. Aenean vehicula finibus nisi. Duis nunc ligula, blandit eget leo quis, eleifend ornare lorem. Nulla placerat semper risus, quis placerat felis suscipit at. Donec sit amet venenatis ipsum, nec hendrerit justo. Nam in maximus dui. Curabitur sollicitudin metus quis lacus tempus dapibus. Etiam sit amet augue dictum, faucibus neque ut, commodo libero. Vestibulum fermentum leo non orci tincidunt interdum sed ut nunc.</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{display:"flex", alignItems:"center", backgroundColor:"#000000"}}>
            <div className='card'>
            <img className='imagem__card' src='./images/karen.jpg' alt='Foto da Karen'/>
            <div className='descricao'>
            <h1 className='nome'>André Marcos dos Santos Lima Tavares</h1>
            <p>Estágiário de Direito</p>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
        )
}