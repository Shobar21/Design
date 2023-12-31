import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIs } from "Const/APIs";
import { Card, Col, Container, Row } from "react-bootstrap";

function AllProducts() {
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(APIs.Ecommerce.PRODUCTS.GET_ALL_CATEGORY);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Card.Text>Category: {product.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllProducts;
