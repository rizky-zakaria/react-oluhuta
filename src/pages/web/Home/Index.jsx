//import layout
import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import react router dom
import { useNavigate } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../../../components/utilities/Footer";
import "../../../assets/css/text-justify.css";
import "../../../assets/css/aboveSlider.css";
import Api from "../../../api";
import Cookies from "js-cookie";
import Slider from "../../../components/web/Slider";
import "../../../assets/css/style-content.css";

function Home() {
  document.title =
    "TRAVEL GIS - Website Wisata Berbasis GIS (Geographic Information System)";

  const navigate = useNavigate();
  const [beritas, setBeritas] = useState([]);
  const konten = `      Desa Oluhuta adalah sebuah desa yang terletak di Kabupaten Bone Balango, Kecamatan Kabila Bone, Provinsi Gorontalo. Desa ini terdiri dari empat dusun diantaranya Dusun Pantai, Dusun Kampung Baru, Dusun Pemukiman, dan Dusun Huliya,  dengan luas keseluruhannya yakni 1.960 hektar. Wilayah desa Oluhuta didominasi oleh perairan, hutan dan pengunungan, serta perkebunan, oleh sebab itu 52,6 penduduk setempat berprofesi sebagai petani dan 42,8 sebagai nelayan.

        Desa Oluhuta terletak berdekatan dengan Desa Botubarani juga Desa Olele yang saoat inl sudah menjadi desa ikonik untuk Provinsi Gorontalo karena potensi wisata bawah laut berupa spesies hiu pous dan terumbu karang yang langka dan cantik. Sama halnya seperti Desa Botubarani dan Olele, potensi dan pesona wisata di Desa Oluhuta tidak kalah menarik. Ada berbagai kekayaan, keunikan geologis, sejarah, serta nilai kebudayaan yang tersimpan di desa yang merupakan cagar budaya ini, antara lain terdapat situs kerangka manusia Oluhuta yang ditemukan sekitar tahun 1994 sampai dengan 2010 silam, ada pula situs lautan terangkat atau biasa dikenal dengan teras terumbu yang terhampar disepanjang pantai Oluhuta dengan aneka rupa yang menambah estetika pantai, serta jajaran Colmunar joint atau kekar kolom dengan bentuk heksagonalnya yang unik yang bisa dijumpai soot memasuki wilayah desa Oluhuta.

     Di sisi lain, desa Oluhuta juga menawarkan pesona bawah laut yang tak kalah indahnya dengan desa Olele, dengan adanya Salvador Dali atau Petrosia lignosa yaitu spesies terumbu karang yang langka ditambah dengan ribuan ikan karang dan penyu, dipastikan mampu membuat setiap mata yang memandangnya menjadi terkesima oleh keindahannya.Tunggu apa apalagi? Mari mengeksplor desa Oluhuta dan dapatkan pengalaman seru dan pastinya berkesan melalui Oluhuta Journey.Oluhuta Journey: Here's your wonderful journey begin!

Lokasi
Desa Oluhuta, Kecamatan Kabila Bone, Kabupaten Bone Bolango, Provinsi Gorontalo

`;

  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

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
    marginTop: "50px",
    width: "70%",
    backgroundColor: "rgba(0, 0, 0, 0)",
  };

  return (
    <React.Fragment>
      <LayoutWeb>
        <div style={{ backgroundColor: "#FFF" }}>
          <div className="container mt-100"></div>
          <Slider />
          <div className="">
            <Row className="m-50">
              <Col xs={12} lg={12} md={12} className="mb-2" style={topHome}>
                <center>
                  <img
                    src="./assets/img/text-top-menu.png"
                    alt=""
                    width={"400px"}
                    style={{ marginTop: "100px" }}
                  />
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
              <Col
                xs={12}
                lg={12}
                md={12}
                className="mb-2"
                style={{ paddingLeft: "10px", paddingRight: "10px" }}
              >
                <center>
                  <Row xs={12} lg={12} md={12} sm={12}>
                    <Col xs={12} lg={12} md={12} sm={12}>
                      <div className="card mb-1">
                        <div className="card-body d-flex justify-content-start">
                          <h5>Berita Terkait</h5>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {beritas.map((berita, index) => (
                      <Col
                        xs={12}
                        lg={4}
                        md={4}
                        sm={12}
                        key={index}
                        style={{ marginTop: 10 }}
                      >
                        <div
                          className="news-container"
                          style={{
                            backgroundImage: `url(${
                              import.meta.env.VITE_APP_BASEURL +
                              "/" +
                              berita.path
                            })`,
                          }}
                        >
                          <div className="news-content">
                            <a href={"/berita/" + berita.id}>
                              <h4>{berita.judul.slice(0, 50)}</h4>
                            </a>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </center>
              </Col>
            </Row>
            <div
              className="card"
              style={{
                backgroundColor: "#FFF",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <div className="card-header" style={{ backgroundColor: "white" }}>
                <h2>
                  <b> Fiturs</b>
                </h2>
              </div>
              <div className="card-body">
                <Row>
                  <Col xs={6} sm={6} md={4} lg={4} className="mt-2">
                    <img
                      src="./assets/img/text-geodiversity.png"
                      alt=""
                      width={"100%"}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} className="mt-2">
                    <img
                      src="./assets/img/text-culturdiversity.png"
                      width={"100%"}
                      alt=""
                    />
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} className="mt-2">
                    <img
                      src="./assets/img/text-biodiversity.png"
                      width={"100%"}
                      alt=""
                    />
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} className="mt-2">
                    <img
                      src="./assets/img/text-umkm.png"
                      alt=""
                      width={"100%"}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} className="mt-2">
                    <img
                      src="./assets/img/text-egd.png"
                      width={"100%"}
                      alt=""
                    />
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} className="mt-2">
                    <img
                      src="./assets/img/text-kuliner.png"
                      width={"100%"}
                      alt=""
                    />
                  </Col>
                </Row>
              </div>
            </div>
            <div className="bg-primary text-light card">
              <div className="card-header">
                <h4>Introduction</h4>
              </div>
              <div className="card-body">
                <Row>
                  <Col xs={12} sm={12} md={5} lg={5} className="rounded">
                    <img
                      src="/assets/img/bg-home.png"
                      alt=""
                      width={"100%"}
                      style={{ borderRadius: 50 }}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={7} lg={7}>
                    {/* <p></p> */}
                    {showFullContent ? (
                      <p>{konten}</p>
                    ) : (
                      <p>{konten.slice(0, 600)}...</p>
                    )}
                    <button
                      onClick={toggleContent}
                      className="btn btn-sm btn-light text-dark mb-2"
                    >
                      {showFullContent ? "Lebih Sedikit" : "Baca Selengkapnya"}
                    </button>
                  </Col>
                  {/* <Col xs={0} sm={0} md={5} lg={5} className="rounded">
                  <img src="/assets/img/bg-home.png" alt="" width={"100%"} />
                </Col> */}
                </Row>
              </div>
            </div>
          </div>
          <div className="mt-100"></div>
          <Footer />
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Home;
