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
          <div className="col-md-6" style={{ color: "#14213d" }}>
            <h5
              className=" text-uppercase text-muted"
              style={{ color: "#14213d" }}
            >
              Grand Sale Offer
            </h5>
            <h1 className="text-uppercase" style={{ fontSize: "50px" }}>
              Summer Time: <br /> Grab this deal right now, tomorrow might be
              gone!
            </h1>
          </div>
          <div className="col-md-6">
            <img src={offer} alt="" className="img-fluid" />
          </div>
        </div>
      </Container>
      <Container fluid>
        <Row xs={1} md={4} className="g-4 mb-5">
          {offers.map((offer) => (
            <Col key={offer._id}>
              <Card
                className="shadow rounded h-100"
                style={{ backgroundColor: "#14213d", color: "#e5e5e5" }}
              >
                <Card.Img variant="top" src={offer.thumb} />
                <Card.Body>
                  <Card.Title
                    style={{ color: "#fca311" }}
                    className="text-uppercase"
                  >
                    {offer.name}
                  </Card.Title>
                  <h6 style={{ color: "#fca311" }}> ${offer.price} Only</h6>
                  <Card.Text>{offer.des.slice(0, 150)}...</Card.Text>
                  <Button
                    style={{ backgroundColor: "#e5e5e5", color: "#14213d" }}
                    as={Link}
                    to={`/order/${offer._id}`}
                  >
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
