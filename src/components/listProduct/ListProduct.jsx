import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import ProductItem from '../productItem/ProductItem'
import {listProductSelector} from '../../redux/selector';
import { useDispatch, useSelector } from "react-redux";

const ListProduct = () => {
  const listPro = useSelector(listProductSelector)
  console.log(listPro)
  return (
    <div>
      <div className='container max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full mt-8'>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {listPro.map((pro, index) => {
            if(index < 8){
              return (
                <ProductItem
                  id={pro.id}
                  name={pro.name}
                  oldprice={pro.oldprice}
                  newprice={pro.price}
                  imgProduct={pro.img}
                  season={pro.season}
                  nameCompany={pro.nameCompany}
                  desc={pro.desc}
                  
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default ListProduct