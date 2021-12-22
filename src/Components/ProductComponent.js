import React from "react";
import { useSelector } from "react-redux";
import { Col, Card, Button } from "react-bootstrap";
import "./ProductComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { title, image, price, description } = product;
    return (
      <Col>
        <Card className="d-flex flex-row align-items-center">
          <div className="img-container">
            <Card.Img
              className="cart-img img-fluid"
              variant="top"
              src={image}
            />
          </div>
          <Card.Body style={{ width: "70%" }}>
            <Card.Title>{title}</Card.Title>
            <div className="text-truncate-container">
              <Card.Text
                className="text-truncate"
                style={{ maxHeight: "300px" }}
              >
                ${description}
              </Card.Text>
            </div>
            <Card.Text
              style={{ padding: "5px", fontSize: "1.3rem", fontWeight: "bold" }}
            >
              + <span>0</span> -
            </Card.Text>
            <Card.Text style={{ fontSize: "2rem" }}>${price}</Card.Text>
            <Button>Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  console.log("Products are: ", products);
  return <>{renderList}</>;
};

export default ProductComponent;
