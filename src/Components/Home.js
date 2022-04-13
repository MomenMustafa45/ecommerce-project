import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div className="card bg-dark text-white border-0">
        <img
          src={require("../assets/bg3.jpg")}
          className="card-img"
          alt="Hello"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-info">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2 text-info">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
