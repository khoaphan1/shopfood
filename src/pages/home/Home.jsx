import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import HeaderListProduct from '../../components/headerListProduct/HeaderListProduct'
import ProductItem from '../../components/productItem/ProductItem'
// import ProductItem1 from '../../../public/assets/image/icon/'

import './Home.css'
import ListProduct from '../../components/listProduct/ListProduct'
import ListProductSecond from '../../components/listProductSecond/ListProductSecond'
import BannerSecond from '../../components/bannerSecond/BannerSecond'
import ListBlog from '../../components/ListBlog/ListBlog'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <div className='advertisement pt-14 pb-14'>
        <div className="container max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
          <div className="columns-2">
            <div className="adv-picture">
              <img className='adv-img' src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/banner/2.jpg" alt="" />
            </div>
            <div className="adv-picture">
              <img className='adv-img' src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/banner/3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="list-product pt-28">
        <HeaderListProduct titleName="featured products"/>
        <ListProduct/>
        <div className="bottom-list-product pb-20"></div>
      </div>
      <BannerSecond
        titleName="BUY 1 GET 1 FREE" 
        nameProduct='Strawbery'
        linkImg="url('https://template.hasthemes.com/naturecircle/naturecircle/assets/img/bg/5.jpg')"
      />
      <div className="list-product pt-28">
        <HeaderListProduct titleName="deal of the days"/>
        <ListProductSecond />
        <div className="bottom-list-product pb-20"></div>
      </div>
      <BannerSecond
        titleName="discount 50%" 
        nameProduct='Orange'
        linkImg="url('https://template.hasthemes.com/naturecircle/naturecircle/assets/img/bg/13.jpg')"
      />
      <div className="list-blog pt-28 pb-28">
        <HeaderListProduct titleName="from our blog"/>
        <ListBlog />
      </div>
      <Footer/>
    </div>
  )
}

export default Home