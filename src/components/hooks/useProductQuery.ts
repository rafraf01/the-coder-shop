import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products";


export const useProduct = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
       
    });
};
