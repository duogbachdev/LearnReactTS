import React, { useEffect, useState } from 'react'
import { getALlData } from '../../api/product.servcies'
import { Idata } from '../../interface/product'
import { useNavigate } from 'react-router-dom'
import DashBoard from '../dashboard/DashBoard'

const Product = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState<Idata[]>([])
  const [count,setCount] = useState<number>(0)
  const userName : any = {
    name : "user"
  }
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const { data } = await getALlData()
  //     setProduct(data)
  //   }
  //   fetchData()
  // },[])
  return (
    <div>
      {count}
      <button onClick={()=> setCount(count + 1)}> click me</button>
      {/* {
        product?.map((item : Idata) => (
          <div key={item?.id}>
            <p>
              {item.id}
            </p>
             <p>
              {item.name}
              </p>
               <p>
              {item.price}
            </p>
            <button onClick={()=>navigate(`/product/${item?.id}`)} className='bg-green-400  w-[180px]'>
              xem chi tiết sản phẩm
            </button>
          </div>
        ))
      } */}
      <DashBoard  />
    </div>
  )
}

export default Product
