import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getIdData, updateData } from '../../api/product.servcies'

const EditProduct = () => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const showItem = async() => {
      if (id) {
        const data = await fetchData(Number(id))
        console.log(data)
        setName(data?.name)
        setPrice(data?.price)
      }
    }
    showItem()
  },[id])
  const fetchData = async(id : number) => {
    const res = await getIdData(id)
    return res.data
  }
   const handelSubmit = async (event: any) => {
    event.preventDefault()
    await updateData(Number(id),{name,price} as any)
    alert("update item successfully")
    navigate("/admin")
  }
  return (
   <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="name">name</label> <br />
        <input value={name} onChange={(event)=> setName(event.target.value)} className='border border-gray-500 w-[250px]' type="text" id='name' placeholder='enter your name ....' /><br />
         <label htmlFor="price">price</label> <br />
        <input value={price} onChange={(event)=> setPrice(event.target.value)} className='border border-gray-500 w-[250px]' type="number" id='price' placeholder='enter your price ....' /> <br />

        <button type='submit' className='bg-green-400 rounded-md w-[100px] m-5 font-bold text-white'> update product</button>
      </form>
    </div>
  )
}

export default EditProduct
