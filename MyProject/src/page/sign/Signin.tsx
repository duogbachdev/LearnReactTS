import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { SignupForm, siginSchema } from '../../api/yupValidate.schema'
import { yupResolver } from '@hookform/resolvers/yup';
import { sigin } from '../../api/product.servcies';

const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver : yupResolver(siginSchema)
  })
  const onSubmit = async (data : SignupForm) => {
    try {
      const respone = await sigin(data)
      console.log(respone)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">name</label>
        <input {...register("name")} type="text" id='name' placeholder='enter your name' />
      <p className='text-red-500'>{errors.name && errors.name.message }</p>

          <label htmlFor="name">password</label>
        <input  {...register("password", { required: true })} type="password" id='name' placeholder='enter your password' />
      <p className='text-red-500'>{errors.password && errors.password.message }</p>

           <label htmlFor="name">confirmPassword</label>
        <input  {...register("confirmPassword", { required: true })} type="password" id='name' placeholder='enter your confirmPassword' />

        <p className='text-red-500'>{errors.confirmPassword && errors.confirmPassword.message }</p>

       <button className='' type="submit">sign in </button>
      </form>
    </div>
  )
}

export default Signin
