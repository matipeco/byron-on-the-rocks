import './styled.scss'

import img1 from "../../assets/carrousell/img1.jpg"
import img2 from "../../assets/carrousell/img2.jpg"
import img3 from "../../assets/carrousell/img3.jpg"
// import { Container } from '../Container'

export const Carrousell =()=>{
  return(
    <section className='container__carrousell'>
      <div className='slider'>
        <input type="radio" id='radio1' name='image-slide' />
        <input type="radio" id='radio2' name='image-slide' />
        <input type="radio" id='radio3' name='image-slide' />

          <div className='slide first'>
            <img className='' src={img3} alt="" width="800" height="500"/>
          </div>

          <div className='slide'>
            <img className='' src={img2} alt="" width="800" height="500"/>
          </div>

          <div className='slide'>
            <img className='' src={img1} alt="" width="800" height="500"/>
          </div>

        <div className='nav-auto'>
          <div className='auto-btn1'></div>
          <div className='auto-btn2'></div>
          <div className='auto-btn3'></div>
        </div>

        <div className='nav-manual'>
          <label className='manual-btn' htmlFor="radio1"></label>
          <label className='manual-btn' htmlFor="radio2"></label>
          <label className='manual-btn' htmlFor="radio3"></label>
        </div>
      </div>
    </section>

  )
}