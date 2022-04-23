import React from 'react'
import Header from '../../components/header/Header'
import BannerItem from '../../components/bannerItem/BannerItem'
import Footer from '../../components/footer/Footer'
import './SignIn.css'

const SignIn = () => {
  return (
    <div>
      <Header/>
      <BannerItem nameItem='Sign In'/>
      <div className="sign-in-main">
        <h4>Sign In</h4>
        <div className="sign-in-form max-w-lg">
          <input className='sign-in-form-input' type="text" name="user-name" placeholder="Username"/>
          <input className='sign-in-form-input' type="password" name="user-password" placeholder="Password"/>
          <h2>You don't have an account? <a href="">Sign up now</a> </h2>
          <div className="sign-in-submit">
            <button className='sign-in-form-btn' type="submit">Login</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SignIn