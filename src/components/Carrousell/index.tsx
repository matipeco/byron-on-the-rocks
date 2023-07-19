import './styled.scss';
import img1 from "../../assets/carrousell/img1.jpg";
import img2 from "../../assets/carrousell/img2.jpg";
import img3 from "../../assets/carrousell/img3.jpg";
import { Container } from '../Container';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'; // Importa el CSS del efecto de "fading"


export const Carrousell = () => {

  //cambiar color de la paginacion segun posicion
  return (
    <section className='container__carrousell'>
      <Container>
        <Swiper
          className='container__slides'
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
          effect="fade" // Agrega la opción 'effect' con el valor 'fade'
          spaceBetween={50}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{
            delay:800,
            disableOnInteraction: false,
          }}
          speed={1000}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='slide'>
            <img className='' src={img3} alt="" width="800" height="500"/>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img className='' src={img1} alt="" width="800" height="500"/>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img className='' src={img2} alt="" width="800" height="500"/>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  )
}
