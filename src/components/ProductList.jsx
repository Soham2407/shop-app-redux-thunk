import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { getProducts } from "../redux/actions/productActions";

const ProductList = () => {
  const { loading, products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {loading ? (
        <div className="m-2">
          <p className="text-lg">Loading...</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto gap-6 my-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
