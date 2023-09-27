//import layout
import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import react router dom
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../../components/utilities/Footer";

function Home() {
  document.title =
    "TRAVEL GIS - Website Wisata Berbasis GIS (Geographic Information System)";

  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState("");

  const topHome = {
    backgroundImage: 'url("/assets/img/bg-home.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
  };

  // const introduction = {
  //   backgroundImage: 'url("/assets/img/bg-home.png")',
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   width: "100%",
  //   height: "500px",
  // };

  const cardHeader = {
    marginTop: "150px",
    width: "70%",
    // opacity: "50%"
  };

  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-100">
          <Row className="m-50">
            <Col xs={12} lg={12} md={12} className="mb-2" style={topHome}>
              <center>
                <div className="card" style={cardHeader}>
                  <div className="card-body">
                    <Container fluid="md">
                      <Row>
                        <Col xs={4} md={4} lg={4} sm={4}>
                          <a href="/user/geodiversity">
                            <img
                              src="assets/img/geo.png"
                              alt=""
                              width={"85px"}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                        <Col xs={4} md={4} lg={4} sm={4}>
                          <a href="/user/culturdiversity">
                            <img
                              src="assets/img/cultur.png"
                              alt=""
                              width={"100px"}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                        <Col xs={4} md={4} lg={4} sm={4}>
                          <a href="/user/biodiversity">
                            <img
                              src="assets/img/biodeversity.png"
                              alt=""
                              width={"85px"}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={3} md={3} lg={3} sm={3}>
                          <a href="/user/ekonomi-creative">
                            <img
                              src="assets/img/ekonomi-kreatif.png"
                              alt=""
                              width={"100px"}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                        <Col xs={3} md={3} lg={3} sm={3}>
                          <a href="/user/scan/">
                            <img
                              src="assets/img/scan.png"
                              alt=""
                              width={"85px"}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                        <Col xs={3} md={3} lg={3} sm={3}>
                          <a href="/user/rental">
                            <img
                              src="assets/img/penyewaan.png"
                              alt=""
                              width={"100px"}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                        <Col xs={3} md={3} lg={3} sm={3}>
                          <a href="/user/kuliner">
                            <img
                              src="assets/img/kuliner.png"
                              alt=""
                              width={"85px"}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </center>
            </Col>
            <Col xs={12} lg={12} md={12} className="mb-2">
              <center>
                <Row>
                  <Col>
                    <div className="card mb-1">
                      <div className="card-body d-flex justify-content-start">
                        <h5>Berita Terkait</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} lg={4} md={4} sm={4}>
                    <div className="card">
                      <img
                        src="assets/img/bg-home.png"
                        alt=""
                        className="card-img-top"
                      />
                      <div class="card-body">
                        <strong class="card-title d-flex justify-content-start">
                          Card title
                        </strong>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4} lg={4} md={4} sm={4}>
                    <div className="card">
                      <img
                        src="assets/img/bg-home.png"
                        alt=""
                        className="card-img-top"
                      />
                      <div class="card-body">
                        <strong class="card-title d-flex justify-content-start">
                          Card title
                        </strong>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4} lg={4} md={4} sm={4}>
                    <div className="card">
                      <img
                        src="assets/img/bg-home.png"
                        alt=""
                        className="card-img-top"
                      />
                      <div class="card-body">
                        <strong class="card-title d-flex justify-content-start">
                          Card title
                        </strong>
                      </div>
                    </div>
                  </Col>
                </Row>
              </center>
            </Col>
          </Row>
          <div className="bg-primary text-light card">
            <div className="card-header">
              <h4>Introduction</h4>
            </div>
            <div className="card-body">
              <Row>
                <Col xs={12} sm={12} md={7} lg={7}>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Obcaecati earum accusantium, dolore ut distinctio odit,
                    magni ea reprehenderit voluptatum laborum at ipsam ex? Ut
                    voluptates odio maiores fuga. Voluptas eveniet voluptatum
                    impedit laborum, quod dolorem dolore soluta eius deserunt,
                    voluptates corrupti, similique animi? Repudiandae, ducimus
                    id nisi delectus officiis debitis? Maiores, sit. Animi
                    doloribus impedit commodi sint? Quasi fugiat nesciunt
                    perspiciatis porro quibusdam nihil dolore laudantium
                    commodi, ducimus rerum eaque corrupti ad doloribus
                    repudiandae? Exercitationem laboriosam qui quidem ratione
                    veniam, quisquam vitae blanditiis voluptatibus corporis
                    dolor, iure atque, repellendus rem enim. Natus, amet enim!
                    Reprehenderit temporibus reiciendis necessitatibus eos quis
                    numquam maxime ipsam eius recusandae ea accusantium, ex
                    quidem non iste maiores vitae fuga minus iusto atque
                    dignissimos. Accusantium, iste!
                  </p>
                </Col>
                <Col xs={12} sm={12} md={5} lg={5} className="rounded">
                  <img src="/assets/img/bg-home.png" alt="" width={"100%"} />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="mt-100"></div>
        <Footer />
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Home;
