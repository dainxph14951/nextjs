import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm, FormState } from 'react-hook-form';
import { add } from '../../../api/products';
import LayoutAdmin from '../../../components/Layout/admin'
import userProducts from '../../../hooks/user-products';

import { ProductType } from '../../../types/products';

const Add = () => {
    const {register,handleSubmit, formState: {errors} } = useForm<any>();
  const { error, create } = userProducts();

  const onSubmit: SubmitHandler<ProductType> = data => {
    create((data))
    alert("Thêm thành công")

}
  return (
<div>
<div className=''>
    <div className='flex justify-between mb-[20px]'>
        <h1 className='text-[30px]'>Edit</h1>
    </div>
    <form className="justify-center w-full mx-auto" method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
            <div className="mt-4">
                <div className="w-full mb-[10px]">
                    <label htmlFor="Name" className="block mb-3 text-sm font-semibold text-gray-500">Product Name</label>
                    <input type="text" {...register('name', { required: true , minLength: 5})} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    {errors.name && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}
                </div>
                <div className="w-full  mb-[10px]">
                    <label htmlFor="Price" className="block mb-3 text-sm font-semibold text-gray-500">Price</label>
                    <input type="text" {...register('price', { required: true })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    {errors.price && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}
                </div>
                <div className="w-full  mb-[10px]">
                    <label htmlFor="Image" className="block mb-3 text-sm font-semibold text-gray-500">Image</label>
                    <input type="file" {...register('img', { required: true })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            <label htmlFor="" className='flex pt-3'>
                            
                            </label>
                </div>
                <div className="w-full  mb-[10px]">
                    <label htmlFor="Quantity" className="block mb-3 text-sm font-semibold text-gray-500">Quantity</label>
                    <input type="number" {...register('quantity', { required: true })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    {errors.quantity && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}

                </div>
                <div className="w-full  mb-[10px]">
                    <label htmlFor="Description" className="block mb-3 text-sm font-semibold text-gray-500">Description</label>
                    <textarea rows={20} {...register('desc', { required: true })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    {errors.desc && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}

                </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <button className="px-6 py-2 text-blue-200 bg-indigo-500 hover:bg-indigo-600">Created</button>
            </div>
        </div>
    </form>
</div>
</div>
  )
}
Add.Layout = LayoutAdmin;
export default Add