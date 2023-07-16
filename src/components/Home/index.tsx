import background from "../../assets/background.jpg"
import './style.scss'

export const Home = ()=>{
  return(
    <header id="Home" className="home__container">
      
      <img className="home__background" src={background} alt="" width='50' height='50'/>
    </header>
  )
}