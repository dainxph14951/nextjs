import { GetStaticPropsContext, GetStaticProps, GetStaticPaths, GetServerSideProps, GetServerSidePropsContext} from 'next';
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
    const data = await (await fetch(`https://62bfe33ac134cf51cec5844c.mockapi.io/products`)).json();
    const paths = data.map((products : any) => (
        {params: {id: products.id}}
    ))
    return {
        paths,
        fallback: false
      }
 }
// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//   console.log('context', context);getServerSideProps
//   context.res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate")
//   const products = await (await fetch(`https://62bfe33ac134cf51cec5844c.mockapi.io/products/${context.params?.id}`)).json();
//   return {
//     props: { products }
//   }
// }


export const  getStaticProps:GetStaticProps<ProductsProps> = async (context : GetStaticPropsContext ) => { 
    const products = await (await fetch(`https://62bfe33ac134cf51cec5844c.mockapi.io/products/${context.params?.id}`)).json();

    return  {
        props: {products}, 
        revalidate: 10

    }
    
}
export default ProductDetail