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
      <h1>this is my order</h1>
      <div className="row">
        {orders.map((order) => (
          <div key={order._id} className="col md-4">
            <div className="card mb-3 h-100" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={order.othumb}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{order.oname}</h5>
                    <p className="card-text">{order.odes}</p>
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
