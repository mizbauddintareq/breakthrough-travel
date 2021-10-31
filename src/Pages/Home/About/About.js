import {
  faBus,
  faPlane,
  faUsers,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
  return (
    <div className="container-fluid my-5">
      {/* about text center */}
      <div className="row" style={{ marginTop: "70px" }}>
        <div className="col-md-12">
          <div className="text-center">
            <h1 className="fw-bold text-uppercase" style={{ color: "#e63946" }}>
              Welcome to Breakthrough travels
            </h1>
            <hr className="w-50 mx-auto" />
            <p className="mx-auto text-muted">
              You’ve made the decision to join the gym. But which is best for
              you - a fitness club or a standard gym? Cost, types of membership{" "}
              <br />
              and opening hours all play a factor in this decision. At the end
              of the day, going to the right gym is all about the facilities.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-5 d-flex align-items-center justify-content-between">
        {/* about text left */}
        <div className="col-md-6">
          <div className="mt-3">
            <p className="fw-bold" style={{ color: "#e63946" }}>
              Exploring Tours With Us
            </p>

            <h4
              className="fw-bold text-capitalize mt-4"
              style={{ color: "#e63946" }}
            >
              We look forward to hearing from you
            </h4>
            <p className="mt-3 text-muted">
              We are a multi-award-winning UK-based tour operator specialising
              in cultural tours, gulet cruises and private trips in Croatia,
              Greece, Ireland, Italy, Turkey and the UK. Our expertise stems
              from an intimate knowledge of these areas – their geography,
              history, people and much more.
            </p>

            <p className="mt-3 text-muted">
              {" "}
              We were founded in 2002, by British archaeologist and
              award-winning documentary filmmaker, Peter Sommer, who originally
              led all of the tours, all in Turkey, himself. Over the years we
              have slowly and carefully evolved, expanding our range of
              destinations as well as the scope of our trips, adding gastronomy,
              walking and exploring to our classic archaeological adventures.
            </p>
          </div>
        </div>
        {/* about image */}
        <div className="col-md-6">
          <div className=" mt-3">
            <img
              src="https://i.ibb.co/9nPgM7b/pexels-te-lensfix-1371360.jpg"
              alt=""
              className="img-fluid mx-auto d-block"
            />
          </div>
        </div>
      </div>

      {/* about cart */}
      <div className="row row-cols-1 row-cols-md-4 g-4 my-1">
        <div className="col">
          <div
            className="card h-100 shadow rounded"
            style={{ backgroundColor: "#457b9d", color: "#f1faee" }}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faUsers} size="6x" />
              <h5 className="card-title text-uppercase mt-4">Family Tours</h5>
              <p className="card-text">
                <small>
                  Our family tours are designed to be relaxing and stimulating,
                  fascinating and fun. Led by an expert guide, you’ll have the
                  opportunity to relax on a beautiful gulet, swim, snorkel and
                  kayak.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card h-100 shadow rounded"
            style={{ backgroundColor: "#457b9d", color: "#f1faee" }}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faPlane} size="6x" />
              <h5 className="card-title text-uppercase mt-4">
                Private Charters Tours
              </h5>
              <p className="card-text">
                <small>
                  Take your family and friends on a fully-crewed gulet charter
                  along the coast of Italy, Greece, Croatia or Turkey or explore
                  some of the finest regions and classical cities in the private
                  land tour.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card h-100 shadow rounded"
            style={{ backgroundColor: "#457b9d", color: "#f1faee" }}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faWalking} size="6x" />
              <h5 className="card-title text-uppercase mt-4">Walking Tours</h5>
              <p className="card-text">
                <small>
                  Our walking tours are a more active kind of travel. Experience
                  the natural beauty and human heritage of historical regions on
                  foot.these tours provide relaxation for mind, body & soul.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card h-100 shadow rounded"
            style={{ backgroundColor: "#457b9d", color: "#f1faee" }}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faBus} size="6x" />
              <h5 className="card-title mt-4 text-uppercase">
                Unique to your needs
              </h5>
              <p className="card-text">
                <small>
                  Take a gulet holiday in Italy, Greece, Croatia or Turkey.
                  Gulet cruises offer relaxation, beautiful food and superb
                  swimming. We’ve added expert guides, truly cultural
                  experiences!
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
