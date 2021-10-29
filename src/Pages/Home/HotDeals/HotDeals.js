import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import offer from "../../images/offer.png";

const HotDeals = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div>
      <Container>
        <div className="row d-flex align-items-center">
          <div className="col md-6">
            <h5>Grand Sale Offer</h5>
            <h1>
              Summer Time: Grab this deal right now, tomorrow might be gone!
            </h1>
          </div>
          <div className="col md-6">
            <img src={offer} alt="" className="img-fluid" />
          </div>
        </div>
      </Container>
      <Container fluid>
        <Row xs={1} md={4} className="g-4">
          {offers.map((offer) => (
            <Col key={offer._id}>
              <Card>
                <Card.Img variant="top" src={offer.thumb} />
                <Card.Body>
                  <Card.Title className="text-uppercase">
                    {offer.name}
                  </Card.Title>
                  <h5>Only ${offer.price}</h5>
                  <Card.Text>{offer.des}</Card.Text>
                  <Button as={Link} to={`/order/${offer._id}`}>
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HotDeals;
