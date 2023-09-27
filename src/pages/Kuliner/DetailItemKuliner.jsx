import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";

function DetailItemKuliner() {
  document.title = "Oluhuta Jorney";

  const navigate = useNavigate();
  let { id } = useParams();
  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-100">
          <Row>
            <Col xs={12} lg={8} sm={12} md={8}>
              <div className="card">
                <div className="card-body">
                  <img
                    src="/assets/img/bg-home.png"
                    className="card-img-top"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4} sm={12} md={4}>
              <div className="card mb-3">
                <div className="card-body">
                  <strong>
                    Nama Makanan <br />
                    Rp. 15.000
                  </strong>
                  <form action="" method="post" className="mt-2">
                    <input
                      type="number"
                      name=""
                      id=""
                      className="form-control"
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-sm btn-success mt-1"
                    >
                      Pesan Sekarang
                    </button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default DetailItemKuliner;
