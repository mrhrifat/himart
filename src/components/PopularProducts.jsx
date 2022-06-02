import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import classes from "../style/all.module.css";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const PopularProduct = () => {
  const { products } = useSelector((state) => state.allProducts);
  // console.log(products);

  let filteredProducts = products.filter((pp) => {
    // console.log(Math.floor(Math.random() * 20 + 1));
    return pp.id > Math.floor(Math.random() * 20 + 1);
  });

  let selectedProducts = filteredProducts.slice(0, 4);

  const renderList = selectedProducts.map((product, ind) => {
    const {
      id,
      title,
      category,
      image,
      description,
      price,
      rating: { rate, count },
    } = product;

    return (
      <>
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
      </>
    );
  });

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6>Popular Products</h6>
            <hr />
          </div>
        </div>
        <div className="row">
          <>{products.length > 1 ? renderList : <Loading />}</>
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
