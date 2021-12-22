import React from "react";
import { useSelector } from "react-redux";
import { Col, Card, Button } from "react-bootstrap";
import "./ProductComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // const { title, category } = products[0];
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
            <Card.Text className="text-truncate" style={{ maxWidth: "300px" }}>
              ${description}
            </Card.Text>
            <Card.Text>${price}</Card.Text>
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
