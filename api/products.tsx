import instance from "./config";
import { ProductType } from "../types/products";


export const add = (product : ProductType) => {
    return instance.post("/products", product);
}
export const remove = (id: number) => {
    const url = `products/${id}`;
    return instance.delete(url); 
}

export const update = (product: ProductType) => {
    const url = `products/${product.id}`;
    return instance.put(url, product); 
}