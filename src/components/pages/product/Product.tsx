import { useOutletContext, useSearchParams } from "react-router-dom";
import { Products } from "../../../types/types";
import ProductCard from "../../product-card/ProductCard";
import { Suspense, useEffect, useState } from "react";
import classNames from "classnames";
import NoResult from "../../no-results-found/NoResult";

const Product = () => {
  const { products } = useOutletContext<Products>();
  const [productData, setProductData] = useState(products);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterMenu = [
    { name: "Clothes", id: 1 },
    { name: "Electronics", id: 2 },
    { name: "Furniture", id: 3 },
    { name: "Shoes", id: 4 },
    { name: "Miscellaneous", id: 5 },
  ];

  const filterProducts = (id: number) => {
    const newProduct = products.filter((product) => product.category.id === id);
    setProductData(newProduct);
    setSearchParams({ category: id.toString() });
  };

  useEffect(() => {
    if (searchParams.get("category")) {
      const newProduct = products.filter(
        (product) =>
          product.category.id.toString() === searchParams.get("category"),
      );

      setProductData(newProduct);
    }
  }, []);

  return (
    <section className="container m-auto px-[3.5rem] py-6">
      <div>
        <h1 className="mb-10 font-climatecrisis text-2xl tracking-widest">
          Shop by essentials
        </h1>
        <ul className="flex flex-wrap justify-center gap-2 py-4 font-urbanist xl:justify-end">
          <li
            className={classNames("text-md cursor-pointer text-gray-600", {
              "border-b border-gray-600": searchParams.get("category") === null,
            })}
            onClick={() => {
              setSearchParams(undefined);
              setProductData(products);
            }}
          >
            All
          </li>
          {filterMenu.map((menu) => {
            const isSelected =
              searchParams.get("category") === menu.id.toString();
            return (
              <li
                key={menu.name}
                onClick={() => filterProducts(menu.id)}
                className={classNames("text-md cursor-pointer", {
                  "border-b border-gray-700 font-semibold text-gray-700":
                    isSelected && searchParams.get("category") !== null,
                })}
              >
                {menu.name}
              </li>
            );
          })}
        </ul>
      </div>
      <Suspense>
        {productData.length === 0 ? (
          <NoResult />
        ) : (
          <ProductCard products={productData} />
        )}
      </Suspense>
    </section>
  );
};

export default Product;
