import React from 'react'
import Header from '../../components/header/Header'
import BannerItem from '../../components/bannerItem/BannerItem'
import Footer from '../../components/footer/Footer'
import ListBlogDetail from '../../components/listBlogDetail/ListBlogDetail'

const BlogDetail = () => {
  return (
    <div>
      <Header/>
      <BannerItem nameItem='Blog Details'/>
      <ListBlogDetail/>
      <Footer/>
    </div>
  )
}

export default BlogDetail