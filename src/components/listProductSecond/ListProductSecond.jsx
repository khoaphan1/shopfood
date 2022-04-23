import React from 'react'
import ProductItem from '../productItem/ProductItem'
import {listProductSelector} from '../../redux/selector';
import { useDispatch, useSelector } from "react-redux";

const ListProductSecond = () => {
  const listPro = useSelector(listProductSelector)
  console.log(listPro)
  return (
    <div className='container max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full mt-8'>
        <div className="grid grid-cols-3 gap-8">
          
          {listPro.map((pro, index) => {
            if(index < 3){
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
  )
}

export default ListProductSecond