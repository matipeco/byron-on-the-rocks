import './styled.scss';
import img1 from "../../assets/carrousell/img1.jpg";
import img2 from "../../assets/carrousell/img2.jpg";
import img3 from "../../assets/carrousell/img3.jpg";
import img4 from "../../assets/carrousell/img4.jpg";
import img5 from "../../assets/carrousell/img5.jpg";
import img6 from "../../assets/carrousell/img6.jpg";
import img7 from "../../assets/carrousell/img7.jpg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-greens';


export const Carrousell = () => {

  return (
    <section className='container__carrousell'>
      <Splide 
        options={{
          type: 'loop',
          perPage: 3, 
          focus  : 'center',
          fixedWidth: '800px',
          autoplay: true,
          interval: 2200,
          trimSpace: false,
          drag: true,
          easing: 'cubic-bezier(0, 0, 0.58, 1)',
          speed:350,
          rewind: true,
          gap: 180
        }}
        >
        <SplideSlide>
          <img className='slide-img' src={img1} alt="" width="800" height="500"/>

        </SplideSlide>
        <SplideSlide>
          <img className='slide-img' src={img2} alt="" width="800" height="500"/>

        </SplideSlide>
        <SplideSlide>
          <img className='slide-img' src={img3} alt="" width="800" height="500"/>

        </SplideSlide>
        <SplideSlide>
          <img className='slide-img' src={img4} alt="" width="800" height="500"/>

        </SplideSlide>
      
        <SplideSlide>
          <img className='slide-img' src={img5} alt="" width="800" height="500"/>

        </SplideSlide>
        <SplideSlide>
          <img className='slide-img' src={img6} alt="" width="800" height="500"/>

        </SplideSlide>
      
        <SplideSlide>
          <img className='slide-img' src={img7} alt="" width="800" height="500"/>

        </SplideSlide>
      
      </Splide>
          
    </section>
  )
}
