import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productAction";
import classes from "../style/all.module.css";
import Loading from "./Loading";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  // console.log(productId)

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      // .then(res => {
      //   console.log(res)
      // })
      .catch((err) => {
        console.log("Error ", err);
      });
    // console.log(response);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  // console.log(product)

  const {
    category,
    description,
    title,
    price,
    image,
    rating: rate,
    count,
  } = product;

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card my-3">
                <div className="row">
                  <div className="col-4">
                    <img src={image} alt={title} className="img-fluid p-2" />
                  </div>
                  <div className="col-8">
                    <h6 className="card-title">{title}</h6>
                    <small className="d-block mb-2">{description}</small>
                    <p>$ {price}</p>
                    <button className={`btn ${classes.button}`}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
