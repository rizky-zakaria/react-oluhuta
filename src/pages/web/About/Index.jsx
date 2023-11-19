//import layout
import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import Slider component
import Slider from "../../../components/web/Slider";

//import BASE URL API
import Api from "../../../api";

//import cart category component
import CardCategory from "../../../components/utilities/CardCategory";

//import react router dom
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  //title page
  document.title = "Oluhuta JOURNEY";

  //navigate
  const navigate = useNavigate();

  //state categories
  const [categories, setCategories] = useState([]);

  //state keyword
  const [keyword, setKeyword] = useState("");

  //   const fetchDataCategories = async () => {
  //     await Api.get("/api/web/categories").then((response) => {
  //       setCategories(response.data.data);
  //     });
  //   };

  //   useEffect(() => {
  //     fetchDataCategories();
  //   }, []);

  //   const searchHandler = () => {
  //     navigate(`/search?q=${keyword}`);
  //   };

  return (
    <React.Fragment>
      <LayoutWeb>
        <div style={{ backgroundColor: "#FFF" }}>
          <div className="container mt-100 mb-5">
            <Row className="mb-5 mt-5">
              <Col xs={12} lg={12} md={12}>
                <div className="card">
                  <img src="assets/img/bg-home.png" alt="" width={"100%"} />
                  <div className="card-body">
                    <center>
                      <h3>Tentang Oluhuta Journey</h3>
                    </center>
                    <p>
                      Oluhuta Journey adalah aplikasi mobile app marketing untuk
                      menampilkan informasi yang lebih detail terkait
                      potensi-potensi alam Desa Oluhuta sehingga dapat
                      mengedukasi wisatawan tentang literasi digital dan
                      literasi informasi dalam pengimplementasiannya sebagai
                      sarana Edu-geowisata. Selain itu web ini berfungsi sebagai
                      media promosi wisata dengan tujuan menjadikan Desa Oluhuta
                      sebagai desa edu-geowisata pertama di Indonesia. Dengan
                      adanya aplikasi ini, potensi-potensi Desa Oluhuta yang
                      menjadi objek wisata dapat dipromosikan secara global dan
                      menjadi rujukan utama wisatawan. Oluhuta Journey
                      dikembangakan pertama kali oleh mahasiswa yang tergabung
                      dalam tim Program Holistik Pembinaan dan Pemberdayaan Desa
                      (PHP2D) Universitas Negeri Gorontalo (UNG) tahun 2021.
                      Kemudian situs web ini di kembangkan dan dikelola oleh
                      Kelompok Sadar Wisata Desa Oluhuta dibawah naungan
                      pemerintah Desa Oluhuta. Telah diresmikan oleh bapak
                      Bupati Bone Bolanga Bapak Dr. H. Hamim Pou, S.Kom, M.H.
                      pada tanggal 1 Januari 2021 sebagai Desa Eduu-Geowisata
                    </p>
                    <center>
                      <img
                        src="assets/img/oluhuta.svg"
                        alt=""
                        className="mt-5"
                      />
                      <b className="mb-5">
                        <br />
                        Pemerintah Desa Oluhuta
                      </b>
                    </center>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default About;
