import useSWR from "swr";
import { add } from "../api/products";

interface Iproduct {
    id? : number;
    name: string;
}
const userProducts = () => {
    // swr api

    const { data, error, mutate } = useSWR("/products");

    //create
    const create = async (item: Iproduct) => {
        const product  = await add(item);
        mutate([...data, product]);
    };

    //delete


    return {
        create,
        // update,
        data,
        error,
    };
};

export default userProducts;