import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";

function DetailBiodiversity() {
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
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, necessitatibus!
                  </h5>
                  <p className="card-text mt-25">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sed mollitia possimus quisquam. Harum maxime delectus eos qui. Incidunt aut rem delectus dignissimos. Saepe ex dolorem distinctio magnam quae veniam accusamus, vero eaque error debitis corrupti ducimus aliquid et, suscipit aut non eos, possimus velit architecto inventore quia? Ipsam labore sint reprehenderit iure provident ea quas qui error incidunt, quos maiores ad ex deserunt voluptatibus dolore, magnam temporibus debitis maxime minus itaque, nisi nam. Veniam nemo amet velit animi labore praesentium vitae possimus neque impedit dolore incidunt cum voluptate reiciendis sit, esse sapiente rem quae odio maiores suscipit error? Nam accusamus ratione ullam sapiente harum, dicta suscipit maiores porro provident modi aperiam obcaecati explicabo. Quas eaque omnis corporis tempore ipsum.
                  </p>
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
                  <a href="">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </h5>
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img
                    src="/assets/img/bg-home.png"
                    className="card-img-top"
                    alt=""
                  />
                  <a href="">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </h5>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default DetailBiodiversity;
