import React from 'react'
import Header from '../../components/header/Header'
import BannerItem from '../../components/bannerItem/BannerItem'
import Footer from '../../components/footer/Footer'
import ListProductDetail from '../../components/listProductDetail/ListProductDetail'

const ProductDetail = () => {
  return (
    <div>
      <Header/>
      <BannerItem nameItem='Product Details'/>
      <ListProductDetail/>
      <Footer/>
    </div>
  )
}

export default ProductDetail