import instance from "./config";

export const add = (product : any) => {
    return instance.post("/products", product);
}
export const remove = (id: number) => {
    const url = `products/${id}`;
    return instance.delete(url); 
}