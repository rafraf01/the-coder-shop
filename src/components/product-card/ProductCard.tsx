import { LuShoppingCart } from "react-icons/lu";
import { Products } from "../../types/types";
import FallbackImage from '../../assets/image/fallback.jpg';
import { useEffect, useState } from "react";



const ProductCard = ({ products }: Products) => {
  const [productData, setProductData] = useState(products);

  useEffect(() => {
    setProductData(productData);
  }, [])

  return <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 lg:gap-7 gap-4 m-auto">
    {
        products.map((product) => {
          const {title, images,  price} = product
            return (
              <div
                key={product.id}
                className="rounded-md border p-5 drop-shadow-xl"
              >
                <a>
                  <img 
                    src={images[0].replace(/[[\]\"]/g, "")}
                    onError={({currentTarget}) => currentTarget.src = FallbackImage}
                    className="h-90 mb-7 min-h-52 w-full self-stretch rounded-md object-cover"
                    />
                </a>
                <div className="font-urbanist">
                  <p className="mb-5 text-xl font-semibold">{title}</p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-xl font-bold">$ {price}</p>
                  </div>
                  <span className="cursor-pointer self-end rounded-md bg-black p-2 text-sm text-white">
                    <LuShoppingCart />
                  </span>
                </div>
              </div>
            );
        })
    }

  </div>;
};

export default ProductCard;
