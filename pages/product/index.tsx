import React from 'react'
import {GetStaticProps, GetStaticPropsContext} from 'next'
import Link from 'next/link'

type ProductsProps = {
    products: any[];
}

const Product = ({products}: ProductsProps) => {
    if(!products) return null;
  return (
    <div>{products.map(item => (
        <div key={item.id}><Link href={`/product/${item.id}`}>{item.name}</Link></div>
    ))}</div>
  )
}
export const  getStaticProps:GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
    const reponse = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)
    const data = await reponse.json();

    return  {
        props: {
            products: data
        }
    }
}
export default Product