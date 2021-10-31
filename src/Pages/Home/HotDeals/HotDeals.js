import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import offer from "../../images/offer.png";
import Loading from "../Loading/Loading";

const HotDeals = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://mysterious-brook-63155.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return Loading();
  }
  return (
    <div>
      <Container>
        <div className="row d-flex align-items-center">
          <div className="col-md-6" style={{ color: "#e63946" }}>
            <h5
              className=" text-uppercase text-muted fw-bold"
              style={{ color: "#e63946" }}
            >
              Grand Sale Offer
            </h5>
            <h1 className="text-uppercase fw-bold" style={{ fontSize: "50px" }}>
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
                style={{ backgroundColor: "#a8dadc", color: "#1d3557" }}
              >
                <Card.Img variant="top" src={offer.thumb} />
                <Card.Body>
                  <Card.Title
                    style={{ color: "#e63946" }}
                    className="text-uppercase fw-bold"
                  >
                    {offer.name}
                  </Card.Title>
                  <h6 style={{ color: "#e63946" }} className="fw-bold">
                    {" "}
                    ${offer.price} Only
                  </h6>
                  <Card.Text>{offer.des.slice(0, 150)}...</Card.Text>
                  <Button
                    style={{ backgroundColor: "#1d3557", color: "white" }}
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
