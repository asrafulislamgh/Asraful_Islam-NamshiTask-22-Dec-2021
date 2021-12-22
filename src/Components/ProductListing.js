import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setProducts } from "../Redux/actions/productAction";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  //   console.log(products.allProducts.products[0]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
  }, [dispatch]);
  console.log(products);
  return (
    <div className="">
      <Row>
        <Col xl={3} lg={3} md={2} sm={12} xs={12}>
          <div className="sideBar">
            <h3>Categories</h3>
            <ul>
              <li className="active">All Products</li>
              <li>Pants</li>
              <li>Shirts</li>
              <li>Jwelleries</li>
              <li>Outfit</li>
            </ul>
          </div>
        </Col>
        <Col xl={6} lg={6} md={7} sm={12} xs={12}>
          <h1 className="mb-4">All Products</h1>
          <Row xs={1} md={1} lg={1} className="g-4">
            <ProductComponent />
          </Row>
        </Col>
        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
          <div className="sideBar">
            <h3>My Cart</h3>
            <ul></ul>
            <Button className="mt-5">Check out</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductListing;
