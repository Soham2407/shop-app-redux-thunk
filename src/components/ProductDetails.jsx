import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProductDetails,
  resetProductDetails,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const { loading, product } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    id && dispatch(getProductDetails(id));

    return () => {
      dispatch(resetProductDetails());
    };
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="m-2">
          <p className="text-lg">Loading...</p>
        </div>
      ) : (
        <div className="flex justify-center gap-10 mt-6 border py-4 px-2">
          <div className="w-[30rem]">
            <img src={product.image} alt={product.title} />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">{product.title}</h2>
            <p className="mt-2 text-lg text-zinc-400">{product.category}</p>
            <p className="mt-2 text-md">{product.description}</p>
            <p className="mt-2 text-lg font-semibold">${product.price}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
