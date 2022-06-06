import React from "react";
import { Card, Button } from "react-bootstrap";

const Cards = ({ img, title, desc, callTo }) => {
  return (
    <div className="cardList">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button variant="primary">
            <a href={`tel:${callTo}`} className="callTo">
              Call
            </a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
