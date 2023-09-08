import React, { useState } from 'react'
import { postData } from '../../api/product.servcies'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const navigate = useNavigate()
  const handelSubmit = async (event: any) => {
    event.preventDefault()
    await postData({ name, price } as any)
    alert("add item successfully")
    navigate("/admin")
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="name">name</label> <br />
        <input onChange={(event)=> setName(event.target.value)} className='border border-gray-500 w-[250px]' type="text" id='name' placeholder='enter your name ....' /><br />
         <label htmlFor="price">price</label> <br />
        <input onChange={(event)=> setPrice(event.target.value)} className='border border-gray-500 w-[250px]' type="number" id='price' placeholder='enter your price ....' /> <br />

        <button type='submit' className='bg-green-400 rounded-md w-[100px] m-5 font-bold text-white'> add product</button>
      </form>
    </div>
  )
}

export default AddProduct
