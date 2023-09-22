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
        <div className="container mt-100">
          <Row className="m-50">
            <Col xs={12} lg={8} md={8}>
              <div className="card">
                <img src="assets/img/dummy.png" alt="" width={"100%"} />
                <div className="card-body">
                  <h3>Menampilkan Judul Untuk Konten Ini</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    perferendis, impedit unde facere alias harum praesentium sit
                    sapiente incidunt blanditiis odit a doloribus amet soluta
                    consequatur possimus! Ipsam vel architecto non, doloremque
                    sit perspiciatis ex, laboriosam cupiditate maiores beatae,
                    eaque ab necessitatibus totam sequi quo dicta quae? Tempora
                    est temporibus voluptas ut facere quaerat dolorum facilis
                    delectus, nostrum dolores doloremque iste quia commodi fuga
                    saepe voluptates nam sunt at minima eos. Totam
                    necessitatibus ipsum dolorum recusandae dicta similique?
                    Atque delectus cumque magnam ad amet fugiat iure, voluptate
                    ea tempore vel a beatae aliquid rerum magni explicabo,
                    quaerat doloribus alias ratione.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    perferendis, impedit unde facere alias harum praesentium sit
                    sapiente incidunt blanditiis odit a doloribus amet soluta
                    consequatur possimus! Ipsam vel architecto non, doloremque
                    sit perspiciatis ex, laboriosam cupiditate maiores beatae,
                    eaque ab necessitatibus totam sequi quo dicta quae? Tempora
                    est temporibus voluptas ut facere quaerat dolorum facilis
                    delectus, nostrum dolores doloremque iste quia commodi fuga
                    saepe voluptates nam sunt at minima eos. Totam
                    necessitatibus ipsum dolorum recusandae dicta similique?
                    Atque delectus cumque magnam ad amet fugiat iure, voluptate
                    ea tempore vel a beatae aliquid rerum magni explicabo,
                    quaerat doloribus alias ratione.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4} md={4} className="bg-white">
              <strong>Lainnya</strong>
              <div className="card">
                <img src="assets/img/dummy.png" alt="" width={"100%"} />
                <h5 className="m-2">Judul dari ini juga</h5>
              </div>
              <div className="card mt-2">
                <img src="assets/img/dummy.png" alt="" width={"100%"} />
                <h5 className="m-2">Judul dari ini juga</h5>
              </div>
              <div className="card mt-2">
                <img src="assets/img/dummy.png" alt="" width={"100%"} />
                <h5 className="m-2">Judul dari ini juga</h5>
              </div>
              <div className="card mt-2">
                <img src="assets/img/dummy.png" alt="" width={"100%"} />
                <h5 className="m-2">Judul dari ini juga</h5>
              </div>
            </Col>
          </Row>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default About;
