import React from 'react'
import './BannerItem.css'

const BannerItem = ({nameItem}) => {
  return (
    <div>
        <div className="slick-slider-item" style={{backgroundImage: `url('https://template.hasthemes.com/naturecircle/naturecircle/assets/img/bg/12.jpg')`}}>
            <div className="banner-main-item text-center">
                <h1>{nameItem}</h1>
                <div className="item-nav flex items-center justify-center">
                    <span className="item-nav-home">Home / </span>
                    <span className="item-nav-text">{nameItem}</span> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerItem