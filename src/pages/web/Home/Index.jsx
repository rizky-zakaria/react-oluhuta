//import layout
import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import react router dom
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../../components/utilities/Footer";
import "../../../assets/css/text-justify.css";
import Api from "../../../api";
import Cookies from "js-cookie";

function Home() {
  document.title =
    "TRAVEL GIS - Website Wisata Berbasis GIS (Geographic Information System)";

  const navigate = useNavigate();
  const [beritas, setBeritas] = useState([]);

  const token = Cookies.get("token");

  const fetchData = async () => {
    await Api.get("/api/client/berita", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setBeritas(response.data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const topHome = {
    backgroundImage: 'url("/assets/img/bg-home.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
  };

  const cardHeader = {
    marginTop: "150px",
    width: "70%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                        <Col xs={6} md={4} lg={4} sm={6} className="mt-2">
                          <a href="/user/geodiversity">
                            <img
                              src="assets/img/geo.svg"
                              alt=""
                              width={100}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                        <Col xs={6} md={4} lg={4} sm={6} className="mt-2">
                          <a href="/user/culturdiversity">
                            <img
                              src="assets/img/cultur.svg"
                              alt=""
                              width={100}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                        <Col xs={6} md={4} lg={4} sm={6} className="mt-2">
                          <a href="/user/biodiversity">
                            <img
                              src="assets/img/biodeversity.svg"
                              alt=""
                              width={100}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                        <Col xs={6} md={4} lg={4} sm={6} className="mt-2">
                          <a href="/user/ekonomi-creative">
                            <img
                              src="assets/img/ekonomi-kreatif.svg"
                              alt=""
                              width={100}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                        <Col xs={6} md={4} lg={4} sm={6} className="mt-2">
                          <a href="/user/scan/">
                            <img
                              src="assets/img/scan.svg"
                              alt=""
                              width={100}
                              className="img-fluid"
                            />
                          </a>
                        </Col>
                        <Col xs={6} md={4} lg={4} sm={6} className="mt-2">
                          <a href="/user/kuliner">
                            <img
                              src="assets/img/kuliner.svg"
                              alt=""
                              width={100}
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
                  {beritas.map((berita, index) => (
                    <Col xs={4} lg={4} md={4} sm={4} key={index}>
                      <div className="card">
                        <img
                          src={
                            import.meta.env.VITE_APP_BASEURL + "/" + berita.path
                          }
                          alt=""
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <strong className="card-title d-flex justify-content-start">
                            {berita.judul}
                          </strong>
                        </div>
                      </div>
                    </Col>
                  ))}
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
                    Desa Oluhuta adalah sebuah desa yang terletak di Kabupaten
                    Bone Balango, Kecamatan Kabila Bone, Provinsi Gorontalo.
                    Desa ini terdiri dari empat dusun diantaranya Dusun Pantai,
                    Dusun Kampung Baru, Dusun Pemukiman, dan Dusun Huliya,
                    dengan luas keseluruhannya yakni 1.960 hektar. Wilayah desa
                    Oluhuta didominasi oleh perairan, hutan dan pengunungan,
                    serta perkebunan, oleh sebab itu 52,6 penduduk setempat
                    berprofesi sebagai petani dan 42,8 sebagai nelayan.
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
