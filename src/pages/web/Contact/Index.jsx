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

function Contact() {
  //title page
  document.title =
    "TRAVEL GIS - Website Wisata Berbasis GIS (Geographic Information System)";

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
        <div className="container mt-100 mb-5">
          <Row className="m-5">
            <Col xs={12} lg={12} md={12}>
              <div className="card">
                <img src="assets/img/bg-home.png" alt="" width={"100%"} />
                <div className="card-body">
                  <center>
                    <h3>Oluhuta Journey</h3>
                    <a href="https://www.instagram.com/oluhuta.journey/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw">
                      <img
                        src="assets/img/instagram.png"
                        alt=""
                        width={50}
                        className="m-4"
                      />
                    </a>
                    <a href="https://www.facebook.com/oluhuta.journey">
                      <img
                        src="assets/img/facebook.png"
                        alt=""
                        width={50}
                        className="m-4"
                      />
                    </a>
                    <a href="https://www.youtube.com/@oluhutajourney7371">
                      <img
                        src="assets/img/youtube.png"
                        alt=""
                        width={50}
                        className="m-4"
                      />
                    </a>
                    <a href="https://www.tiktok.com/@oluhutajourney">
                      <img
                        src="assets/img/tiktok.png"
                        alt=""
                        width={50}
                        className="m-4"
                      />
                    </a>
                  </center>
                  <center>
                    <img src="assets/img/oluhuta.svg" alt="" className="mt-5" />
                    <b className="mb-5">
                      <br />
                      Pemerintah Desa Oluhuta
                    </b>
                  </center>
                </div>
              </div>
            </Col>
          </Row>
          <br />
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Contact;
