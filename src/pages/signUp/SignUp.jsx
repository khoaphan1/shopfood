import React from 'react'
import Header from '../../components/header/Header'
import BannerItem from '../../components/bannerItem/BannerItem'
import Footer from '../../components/footer/Footer'
import './SignUp.css'
const SignUp = () => {
  return (
    <div>
      <Header/>
      <BannerItem nameItem='Sign Up'/>
      <div className="sign-up-main">
        <h4>Sign Up</h4>
        <div className="sign-up-form max-w-lg">
          <div className="sign-up-content">
            <h3>First Name</h3>
            <input className='sign-up-form-input' type="text" name="first-name" placeholder="First Name"/>
          </div>
          <div className="sign-up-content">
            <h3>Last Name</h3>
            <input className='sign-up-form-input' type="text" name="last-name" placeholder="Last Name"/>
          </div>
          <div className="sign-up-content">
            <h3>Email</h3>
            <input className='sign-up-form-input' type="email" name="email" placeholder="Email"/>
          </div>
          <div className="sign-up-content">
            <h3>Phone</h3>
            <input className='sign-up-form-input' type="text" name="phone" placeholder="Phone"/>
          </div>
          <div className="sign-up-content">
            <h3>User Name</h3>
            <input className='sign-up-form-input' type="text" name="user-name" placeholder="Username"/>
          </div>
          <div className="sign-up-content">
            <h3>Password</h3>
            <input className='sign-up-form-input' type="password" name="password" placeholder="Password"/>
          </div>
          <div className="sign-up-content">
            <h3>Retype Password</h3>
            <input className='sign-up-form-input' type="password" name="retype-password" placeholder="Retype Password"/>
          </div>
          <h2>You have an account? <a href="">Sign in now</a> </h2>
          <div className="sign-up-submit">
            <button className='sign-up-form-btn' type="submit">Register</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SignUp