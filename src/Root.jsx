import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import CategoryProduct from "./components/CategoryProduct";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import NewProducts from "./components/NewProducts";
import WhyUs from "./components/WhyUs";
import PopularProduct from "./components/PopularProducts";

class Root extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <Categories />
                  <NewProducts />
                  <PopularProduct />
                  <ProductListing />
                  <WhyUs />
                </>
              }
            />
            <Route path="/products/categories" element={<Categories />} />
            <Route
              path="/products/category/:categoryType"
              element={<CategoryProduct />}
            />
            <Route path="/newproduct" element={<NewProducts />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route
              path="*"
              element={
                <div className="container p-3">
                  <div className="row">
                    <div className="col-12 text-center">
                      <h2>404 Not Found</h2>
                      <p>There is nothing here !</p>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default Root;
