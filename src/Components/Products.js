import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      let response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProduct();
  }, []);

  const goProduct = (e) => {
    return (
      <div>
        <img src={e.image} alt={e.title} />
      </div>
    );
  };

  const Loading = () => {
    return <>Loading....</>;
  };

  const handleProduct = (e) => {
    const updatedList = data.filter((x) => x.category === e);
    setFilter(updatedList);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="buttons justify-content-center d-flex mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => handleProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => handleProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => handleProduct("jewelery")}
          >
            jewelery's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => handleProduct("electronics")}
          >
            Electornics
          </button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3" key={product.id}>
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text fw-bold">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                      onClick={() => goProduct(product)}
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-22 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProduct />}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Products;
