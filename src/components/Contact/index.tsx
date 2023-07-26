import { Container } from '../Container'
import { FormEmail } from '../FormEmail'
import './style.scss'

export const Contact = () =>{
  return(
    <section id='Contact' className='contact__container'>
      <Container>
        <div className='contact__container-text'>
          <h3>Contact Us</h3>
          <p>Phone: +61 431 218 161</p>
          <p>Email: byronontherocksbar@gmail.com</p>
        </div>
        <FormEmail/>
      </Container>
    </section>
  )
}