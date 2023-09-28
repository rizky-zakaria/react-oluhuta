import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";

function Rental() {
  document.title = "Oluhuta Jorney";

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-100">
          <Row>
            <Col xs={12} lg={4} sm={12} md={4}>
              <div className="card mb-3">
                <div className="card-body">
                  <img
                    src="/assets/img/bg-home.png"
                    className="card-img-top"
                    alt=""
                  />
                  <a href="/user/geodiversity/1">
                    <h5>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h5>
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4} sm={12} md={4}>
              <div className="card mb-3">
                <div className="card-body">
                  <img
                    src="/assets/img/bg-home.png"
                    className="card-img-top"
                    alt=""
                  />
                  <a href="/user/geodiversity/1">
                    <h5>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h5>
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4} sm={12} md={4}>
              <div className="card mb-3">
                <div className="card-body">
                  <img
                    src="/assets/img/bg-home.png"
                    className="card-img-top"
                    alt=""
                  />
                  <a href="/user/geodiversity/1">
                    <h5>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h5>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-100"></div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Rental;
