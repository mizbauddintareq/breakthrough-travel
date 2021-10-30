import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import useAuth from "../../context/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email, isDelete]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        const proceed = window.confirm("Are You Want to delete data??");
        if (proceed) {
          if (result.deletedCount) {
            setIsDelete(!isDelete);
          } else {
            setIsDelete(false);
          }
        }
      });
  };
  return (
    <Container fluid>
      <h1 className=" text-center mt-5" style={{ color: "#14213d" }}>
        {" "}
        You Can See All Your Orders Here Those You've Purchased{" "}
      </h1>
      <div className="row">
        {orders.map((order) => (
          <div key={order._id} className="col-md-4">
            <div
              className="card mb-3 h-100"
              style={{ backgroundColor: "#14213d", color: "#e5e5e5" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={order.othumb}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-white text-uppercase">
                      {order.oname}
                    </h5>
                    <p className="card-text text-muted">User: {order.name}</p>
                    <p className="card-text">Address: {order.address}</p>
                    <p className="card-text">Phone: {order.phone}</p>
                    <p className="card-text">Price: {order.oprice} USD</p>

                    <Button
                      onClick={() => handleDelete(order._id)}
                      variant="danger"
                    >
                      DELETE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MyOrder;
