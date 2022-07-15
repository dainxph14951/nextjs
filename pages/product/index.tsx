import React from 'react'
import {GetStaticProps, GetStaticPropsContext} from 'next'
import Link from 'next/link'
import userSWA from 'swr'

type ProductsProps = {
    products: any[];
}

const Product = () => {
    // if(!products) return null;
        const url = `https://62bfe33ac134cf51cec5844c.mockapi.io/products`;

        const fetcher = async (url: any) => await ( await fetch(url)).json();

        const {data,error} = userSWA(url, fetcher, {dedupingInterval : 500})

        if(!data) return <div>Load...</div>
        if(error) return <div>Failed to load</div>
  return (
    <div>{data.map((item : any) => (
        <div key={item.id}><Link href={`/product/${item.id}`}>{item.name}</Link></div>
    ))}</div>

  )
}
// export const  getStaticProps:GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
//     const reponse = await fetch(`https://62bfe33ac134cf51cec5844c.mockapi.io/products`)
//     const data = await reponse.json();

//     return  {
//         props: {
//             products: data
//         },
//         revalidate: 5
//     }
// }
export default Product