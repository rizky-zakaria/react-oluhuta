import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";
import Api from "../../api";
import Cookies from "js-cookie";

function DetailEkonomiCreative() {
  document.title = "Oluhuta Jorney";

  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const fetchData = async () => {
    await Api.get("/api/client/merchant/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setProducts(response.data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-100">
          <Row>
            {products.map((product, index) => (
              <Col xs={12} lg={4} sm={12} md={4} key={index}>
                <a
                  href={"/user/ekonomi-creative/item/" + product.id}
                  style={linkStyle}
                >
                  <div className="card mb-3">
                    <div className="card-body">
                      <img
                        src={
                          import.meta.env.VITE_APP_BASEURL + "/" + product.path
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <h5 className="mt-2">{product.product}</h5>
                      <span>{product.harga}</span>
                    </div>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-100"></div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default DetailEkonomiCreative;
