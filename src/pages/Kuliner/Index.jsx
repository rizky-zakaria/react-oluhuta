import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";

function Kuliner() {
  document.title = "Oluhuta Jorney";

  const navigate = useNavigate();

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-100">
          <Row>
            <Col xs={12} lg={4} sm={12} md={4}>
              <a href="/user/ekonomi-creative/1" style={linkStyle}>
                <div className="card mb-3">
                  <div className="card-body">
                    <img
                      src="/assets/img/bg-home.png"
                      className="card-img-top"
                      alt=""
                    />
                    <h5 className="mt-2">
                      <i className="fas fa-map-marker-alt text-danger  m-2"></i>
                      Kantin Kepulauan Solomon
                    </h5>
                    <span>Aneka Makan & Minuman</span>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} lg={4} sm={12} md={4}>
              <a href="/user/ekonomi-creative/1" style={linkStyle}>
                <div className="card mb-3">
                  <div className="card-body">
                    <img
                      src="/assets/img/bg-home.png"
                      className="card-img-top"
                      alt=""
                    />
                    <h5 className="mt-2">
                      <i className="fas fa-map-marker-alt text-danger  m-2"></i>
                      Kantin Kepulauan Solomon
                    </h5>
                    <span>Aneka Makan & Minuman</span>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} lg={4} sm={12} md={4}>
              <a href="/user/ekonomi-creative/1" style={linkStyle}>
                <div className="card mb-3">
                  <div className="card-body">
                    <img
                      src="/assets/img/bg-home.png"
                      className="card-img-top"
                      alt=""
                    />
                    <h5 className="mt-2">
                      <i className="fas fa-map-marker-alt text-danger m-2"></i>
                      Kantin Kepulauan Solomon
                    </h5>
                    <span>Aneka Makan & Minuman</span>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Kuliner;
