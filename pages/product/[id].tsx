import { GetStaticPropsContext, GetStaticProps, GetStaticPaths} from 'next';
import React from 'react'
import {useRouter} from 'next/router'
type ProductsProps = {
    products: any;
}

const ProductDetail = ({products}: ProductsProps) => {
    if(!products) return null;
  return (
    <div>{products.name}</div>
  )
}  
 export const getStaticPaths:GetStaticPaths  = async () => {
    const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
    const paths = data.map(products => (
        {params: {id: products.id}}
    ))
    return {
        paths,
        fallback: false
      }
 }

export const  getStaticProps:GetStaticProps<ProductsProps> = async (context : GetStaticPropsContext ) => { 
    const products = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json();

    return  {
        props: {products}
    }
}
export default ProductDetail