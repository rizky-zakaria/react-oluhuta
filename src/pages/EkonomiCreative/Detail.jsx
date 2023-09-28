import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";

function DetailEkonomiCreative() {
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
              <a href="/user/ekonomi-creative/item/1" style={linkStyle}>
                <div className="card mb-3">
                  <div className="card-body">
                    <img
                      src="/assets/img/bg-home.png"
                      className="card-img-top"
                      alt=""
                    />
                    <h5 className="mt-2">Nama Makanan A</h5>
                    <span>Rp. 15.000</span>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} lg={4} sm={12} md={4}>
              <a href="/user/ekonomi-creative/item/1" style={linkStyle}>
                <div className="card mb-3">
                  <div className="card-body">
                    <img
                      src="/assets/img/bg-home.png"
                      className="card-img-top"
                      alt=""
                    />
                    <h5 className="mt-2">Nama Makanan A</h5>
                    <span>Rp. 15.000</span>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} lg={4} sm={12} md={4}>
              <a href="/user/ekonomi-creative/item/1" style={linkStyle}>
                <div className="card mb-3">
                  <div className="card-body">
                    <img
                      src="/assets/img/bg-home.png"
                      className="card-img-top"
                      alt=""
                    />
                    <h5 className="mt-2">Nama Makanan A</h5>
                    <span>Rp. 15.000</span>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </div>
        <div className="mt-100"></div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default DetailEkonomiCreative;
