import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDelete]);

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
    <div>
      <h1>This is all order</h1>
      <div className="row">
        {orders.map((order) => (
          <div key={order._id} className="col-md-4">
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
                    <p className="card-text">{order.name}</p>
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
    </div>
  );
};

export default AllOrders;
