import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getIdData } from '../../api/product.servcies'
import { Idata } from '../../interface/product'

const ProductDetails = () => {
  const [data, setData] = useState<Idata>()
  const { id } = useParams()
  useEffect(() => {
    const handelCheckId = async() => {
      if (id) {
        const data = await fetchDataDetails(Number(id))
        setData(data)
      }
    }
    handelCheckId()
  }, [id])
  const fetchDataDetails = async(id : number) => {
    const res = await getIdData(id)
    return res.data
  }
  return (
    <div>
      <p>{data?.id}</p>
      <p>{ data?.name}</p>
      <p>{ data?.price}</p>

    </div>
  )
}

export default ProductDetails
