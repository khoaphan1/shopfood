import React from 'react'
import Header from '../../components/header/Header'
import BannerItem from '../../components/bannerItem/BannerItem'
import Footer from '../../components/footer/Footer'
import ListProductShop from '../../components/listProductShop/ListProductShop'

const Shop = () => {
  return (
    <div>
      <Header/>
      <BannerItem nameItem='Shop'/>
      <ListProductShop/>
      <Footer/>
    </div>
  )
}

export default Shop