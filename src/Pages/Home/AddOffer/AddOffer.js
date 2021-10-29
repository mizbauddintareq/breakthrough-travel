import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddOffer = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addOffer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Offer added successfully");
          reset();
        }
      });
  };

  return (
    <Container>
      <div className="row ">
        <div className="col-md-5 text-center mx-auto">
          <h1>This is add offer</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Offer Name"
              className="m-2 p-2 form-control"
              {...register("name")}
            />
            <br />
            <input
              placeholder="Offer Price"
              className="m-2 p-2 form-control"
              {...register("price")}
            />
            <br />
            <input
              placeholder="Image URL"
              className="m-2 p-2 form-control"
              {...register("thumb")}
            />
            <br />
            <textarea
              placeholder="Offer Description"
              className="m-2 p-2 form-control"
              {...register("des")}
            />

            <input
              className="btn btn-warning"
              type="submit"
              value="Add Offer"
            />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddOffer;
