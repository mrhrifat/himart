import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Electronics from "../image/electronics.png";
import Men from "../image/men.png";
import Women from "../image/women.png";
import Jewelry from "../image/jewelry.png";
import axios from "axios";
import { setCategory } from "../redux/actions/productAction";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Categories = () => {
  const category = useSelector((state) => state.categories.category);
  const dispatch = useDispatch();
  // console.log(category);

  const fetchCategory = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => {
        console.log("Error ", err);
      });
    // console.log(response);
    dispatch(setCategory(response.data));
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const changeImage = (category) => {
    if (category === "electronics") return Electronics;
    else if (category === "jewelery") return Jewelry;
    else if (category === "men's clothing") return Men;
    else return Women;
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h6>Categories</h6>
          <hr />
        </div>
        {category ? (
          category?.map((category) => (
            <div className="col-3" key={category}>
              <Link to={`products/category/${category}`} key={category}>
                <div className="card">
                  <div className="card-body text-center">
                    <img
                      src={changeImage(category)}
                      className="img-fluid h-25 w-25"
                      alt="Electronics"
                    />
                    <p className="text-capitalize">{category}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Categories;
