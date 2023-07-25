import services from "../../assets/carrousell/img1.jpg"
import './styled.scss'

export const Description =()=>{
  return(
    <>
    <section className='description__container'>
        {/* <p>
          Our talented bartenders specialize in bar catering service in all kind of events; ranging from weddings, birthdays celebrations, corporate events, or any other private gathering.
        </p> */}
        <div className='description__container-text'>
          <p className='description__text1'>Our talented bartenders specialize in </p>
          <span>bar catering service in all kind of events</span>
          <p className='description__text2'>
          ranging from weddings, birthdays celebrations, corporate events, or any other private gathering.
          </p>
        </div>
          
    </section>
    <div  className='description__box'>
          <img src={services} alt="" width="50" height="50" />
          <p>
          With much love and dedication, we will adapt our service to match your preferences, ensuring that your vision becomes a reality.
          </p>
        </div>
    </>
  )
    
        
}