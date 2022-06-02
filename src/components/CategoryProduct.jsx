import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setCategoryProduct,
  removeCategoryProduct,
} from "../redux/actions/productAction";
import classes from "../style/all.module.css";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const CategoryProduct = () => {
  const { categoryType } = useParams();
  // console.log(categoryType);

  const dispatch = useDispatch();

  const categoryProducts = useSelector(
    (state) => state.categoryProduct.categoryProduct
  );

  const fetchCategoryProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/category/${categoryType}`)
      .catch((err) => {
        console.log("Error ", err);
      });
    // console.log(response.data);
    dispatch(setCategoryProduct(response.data));
  };

  useEffect(() => {
    if (categoryType && categoryType.length !== "") fetchCategoryProduct();
    return () => {
      dispatch(removeCategoryProduct());
    };
  }, [categoryType]);

  // console.log(categoryProducts);

  const renderCategoryProduct =
    categoryProducts && Object.keys(categoryProducts).length > 1 ? (
      categoryProducts.map((product) => {
        const {
          title,
          category,
          description,
          image,
          price,
          id,
          rating: { rate, count },
        } = product;
        // console.log(price);
        return (
          <div
            className="col-8 col-sm-6 col-md-4 col-lg-3 mx-auto my-2"
            key={id}
          >
            <Link to={`/product/${id}`} className={classes.link}>
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
                  <button className={`btn ${classes.button}`}>
                    Add to Cart
                  </button>
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
      })
    ) : (
      <Loading />
    );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5>Products of {categoryType}</h5>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">{renderCategoryProduct}</div>
      </div>
    </>
  );
};

export default CategoryProduct;
