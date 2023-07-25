// import background from "../../assets/edit.png"
import { Container } from "../Container"
import './style.scss'

export const Home = ()=> {
  return(
    <header id="Home" className="home__container">
      <Container>
        <div className="home__text">
          <h2>Welcome to our world of <br/>
            unique flavors and experiences!</h2>
          <p>We are <h1>Byron On The Rocks</h1>, experts in <br/>
           pop-up bar events in the beautiful region <br/>
          of Northern Rivers and its surroundings.</p>
          <div className="scrollAuto" id="Description"></div>
        </div>

        <a className="home__button" href="#Description">Explore</a>
      </Container>
    </header>
  )
}