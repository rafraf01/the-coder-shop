import { useOutletContext } from "react-router-dom";
import { Products } from "../../../types/types";
import ProductCard from "../../product-card/ProductCard";
import { Suspense, useEffect, useMemo } from "react";

const Product = () => {
  const { products } = useOutletContext<Products>();

  useEffect(() => {
    console.log(products);
  }, [])

  const handleMenuClick = () => useMemo(() => {
    console.log('test')
  }, [])

  return (
    <section>
      <div>
        
      </div>
      <Suspense>
        <ProductCard products={products} />
      </Suspense>
    </section>
  )
}

export default Product;