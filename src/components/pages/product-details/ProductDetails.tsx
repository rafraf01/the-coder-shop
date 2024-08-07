import {  useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Products } from "../../../types/types";
import classNames from "classnames";
import Button from "../../button/Button";
import { IoIosArrowBack } from "react-icons/io";

const ProductDetails = () => {
  const { products } = useOutletContext<Products>();
  const { productid } = useParams();
	const navigate = useNavigate();
  const currentProduct = products.filter(
    (product) => "" + product.id === productid,
  )[0];
  const [selectedIndex, setSelectedIndex] = useState(0);


  return (
    <section>
      <div className="relative mx-10 my-20">
        <button 
				onClick={() => navigate(-1)}
				className="w-26 absolute -top-16 right-0 flex items-center justify-between gap-2 rounded-full bg-gray-600/50 px-4 py-2 text-sm outline outline-offset-2 outline-gray-500/50">
          <IoIosArrowBack className="text-sm" />
          <span>Back</span>
        </button>
        <div className="grid-row-2 grid items-center justify-center gap-10 font-urbanist lg:grid-cols-2 lg:grid-rows-none lg:gap-0">
          <div className="flex flex-col-reverse gap-5 lg:flex-row">
            <div className="flex flex-row justify-center gap-2 lg:flex-col">
              {currentProduct.images.map((img, idx) => {
                return (
                  <img
                    key={img}
                    src={img}
                    className={classNames(
                      "h-20 w-20 cursor-pointer rounded-xl object-cover",
                      { "opacity-30": selectedIndex === idx },
                    )}
                    onClick={() => setSelectedIndex(idx)}
                  />
                );
              })}
            </div>
            <img
              src={currentProduct.images[selectedIndex]}
              className="self-stretch rounded-xl max-sm:w-full lg:w-4/6"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl">{currentProduct.title}</h1>
            <p className="text-base text-gray-400">
              {currentProduct.description}
            </p>
						<div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-xl font-semibold">
                ${currentProduct.price} USD
              </p>
            </div>
            <Button
              className="max-w-32 font-semibold hover:text-red-900"
              variant="primary"
            >
              Add to bag
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
