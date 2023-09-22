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

function Home() {
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

  const topHome = {
    backgroundImage: 'url("/assets/img/bg-home.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "600px"
  };

  const cardHeader = {
    marginTop: "150px",
    width: "70%"
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
                    <div className="row d-flex justify-content-center">
                      <div className="col-3">
                        <img src="assets/img/dummy-icon.png" alt="" /> <br />
                        <span>Geodiversity</span>
                      </div>
                      <div className="col-3">
                        <img src="assets/img/dummy-icon.png" alt="" /> <br />
                        <span>Geodiversity</span>
                      </div>
                      <div className="col-3">
                        <img src="assets/img/dummy-icon.png" alt="" /> <br />
                        <span>Geodiversity</span>
                      </div>
                      <div className="col-3">
                        <img src="assets/img/dummy-icon.png" alt="" /> <br />
                        <span>Geodiversity</span>
                      </div>
                      <div className="col-3 mt-5">
                        <img src="assets/img/dummy-icon.png" alt="" /> <br />
                        <span>Geodiversity</span>
                      </div>
                      <div className="col-3 mt-5">
                        <img src="assets/img/dummy-icon.png" alt="" /> <br />
                        <span>Geodiversity</span>
                      </div>
                      <div className="col-3 mt-5">
                        <img src="assets/img/dummy-icon.png" alt="" /> <br />
                        <span>Geodiversity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </center>
            </Col>
          </Row>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Home;
