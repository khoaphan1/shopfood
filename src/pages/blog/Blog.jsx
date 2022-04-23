import React from 'react'
import Header from '../../components/header/Header'
import BannerItem from '../../components/bannerItem/BannerItem'
import Footer from '../../components/footer/Footer'
import ListBlogItem from '../../components/listBlogItem/ListBlogItem'

const Blog = () => {
  return (
    <div>
      <Header/>
      <BannerItem nameItem='Blog'/>
      <ListBlogItem/>
      <Footer/>
    </div>
  )
}

export default Blog