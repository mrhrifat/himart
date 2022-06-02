import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  // const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      // .then((res) => {
      //   // console.log(res.data);
      //   // dispatch(setProducts(res.data));
      // })
      .catch((err) => {
        console.log("Error ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h6>All Products</h6>
          <hr />
        </div>
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
