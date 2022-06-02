import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "../style/all.module.css";
import Loading from "./Loading";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // console.log(products);
  const renderList = products.map((product) => {
    const {
      title,
      category,
      description,
      image,
      price,
      id,
      rating: { rate, count },
    } = product;
    return (
      <div className="col-8 col-sm-6 col-md-4 col-lg-3 mx-auto my-2" key={id}>
        <Link to={`product/${id}`} className={classes.link}>
          <div className="card h-100">
            <img
              className="card-img-top h-50 w-50 m-auto mt-2 img-fluid"
              src={image}
              alt="Product Img"
            />
            <div className="card-body">
              <h6 className="card-title">
                {title.length > 20 ? title.substring(0, 20) + `..` : title}
              </h6>
              <p>$ {price}</p>
              <button className={`btn ${classes.button}`}>Add to Cart</button>
            </div>
            <div className="card-footer">
              <div className="d-flex flex-row justify-content-between">
                <span>{rate}</span>
                <span>{count}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      {/* {console.log(products)}*/}
      {products.length > 1 ? renderList : <Loading />}
    </>
  );
};

export default ProductComponent;
