import React, { useEffect, useRef, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../context/useAuth";

const Order = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [info, setInfo] = useState({});
  const nameRef = useRef();
  const emailRef = useRef();
  const addRef = useRef();
  const phoneRef = useRef();
  const onameRef = useRef();
  const opriceRef = useRef();
  const imgRef = useRef();
  const desRef = useRef();

  const handleBooking = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const address = addRef.current.value;
    const phone = phoneRef.current.value;
    const oname = onameRef.current.value;
    const oprice = opriceRef.current.value;
    const othumb = imgRef.current.value;
    const odes = desRef.current.value;

    const saveOrder = {
      name,
      email,
      oname,
      oprice,
      othumb,
      odes,
      address,
      phone,
    };
    console.log(saveOrder);

    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveOrder),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your Booking Has Been Confirm");
          setInfo({});
        }
      });

    e.preventDefault();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <Container fluid>
      <div
        className="row py-5 d-flex justify-content-around align-items-center"
        style={{ backgroundColor: "#14213d" }}
      >
        <div className="col-md-4 text-center">
          <form onSubmit={handleBooking}>
            <input
              readOnly
              type="text"
              ref={nameRef}
              className="m-2 p-2 form-control"
              value={user.displayName}
            />

            <input
              type="text"
              readOnly
              ref={emailRef}
              className="m-2 p-2 form-control"
              value={user.email}
            />
            <input
              type="text"
              ref={addRef}
              className="m-2 p-2 form-control"
              placeholder="Please enter your address"
            />
            <input
              type="text"
              ref={phoneRef}
              className="m-2 p-2 form-control"
              placeholder="Please enter your phone number"
            />

            <input
              readOnly
              type="text"
              ref={onameRef}
              className="m-2 p-2 form-control"
              value={info.name}
            />

            <input
              readOnly
              type="text"
              ref={opriceRef}
              className="m-2 p-2 form-control"
              value={info.price}
            />
            <input
              readOnly
              type="text"
              ref={imgRef}
              className="m-2 p-2 form-control"
              value={info.thumb}
            />
            <textarea
              readOnly
              type="text"
              ref={desRef}
              className="m-2 p-2 form-control"
              value={info.des}
            />

            <input
              className="btn btn-warning fw-bold "
              type="submit"
              value="Confirm Order"
            />
          </form>
        </div>
        <div className="col-md-4">
          <Card className="bg-dark text-white">
            <Card.Img src={info.thumb} />
            <Card.ImgOverlay>
              <Card.Title className="text-uppercase">{info.name}</Card.Title>
              <Card.Text>{info.des}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Order;
