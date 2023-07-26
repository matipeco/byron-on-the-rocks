import services from "../../assets/carrousell/img6.jpg"
import './styled.scss'

export const BoxDescription = ()=>{
  return(
    <div className='description__box'>
        <img src={services} alt="" width="50" height="50" />
        <p>
          With much love and dedication, we will adapt our service to match your preferences, ensuring that your vision becomes a reality.
        </p>
    </div>
  )
}