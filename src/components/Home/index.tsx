import background from "../../assets/edit.png"
import { Container } from "../Container"
import './style.scss'

export const Home = ()=> {
  return(
    <header id="Home" className="home__container">
      <img className="home__background" src={background} alt="" width='50' height='50'/>
      <Container>
        <div className="home__text">
          <h2>Welcome to our world of <br/>
            unique flavors and experiences!</h2>
          <p>We are <h1>Byron On The Rocks</h1>, experts in <br/>
           pop-up bar events in the beautiful region <br/>
          of Northern Rivers and its surroundings.</p>
        </div>
      </Container>
      <div className="home__gradient-overlay "></div>
    </header>
  )
}