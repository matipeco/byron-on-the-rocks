import './styled.scss'
import especias from '../../assets/Fondo especias.png'

export const Description =()=>{
  return(
    <section className='description__container'>
      <img src={especias} alt="" width='50' height='50'/>
      <p className='description__text1'>Our talented bartenders specialize in </p>
      <span>bar catering service in all kind of events</span>
      <p className='description__text2'>
        ranging from weddings, birthdays celebrations, corporate events, or any other private gathering.
      </p>
    </section>
  )
}