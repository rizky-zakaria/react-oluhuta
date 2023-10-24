import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";
import Api from "../../api";
import "../../assets/css/style-content.css";
import Cookies from "js-cookie";

function Biodiversity() {
  document.title = "Oluhuta Jorney";

  const [biodiversitys, setBiodiversitys] = useState([]);

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const fetchData = async () => {
    await Api.get("/api/client/biodiversity", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setBiodiversitys(response.data.data);
    });
  };

  useEffect(() => {
    fetchData();
    cek();
  }, []);

  // const cek = () => {
  //   if (Array.isArray(biodiversitys)) {
  //     biodiversitys.map((item) => {
  //       console.log(item);
  //     });
  //   }
  // };

  return (
    <React.Fragment>
      <LayoutWeb>
        <div style={{ backgroundColor: "#FFF" }}>
          <div className="container mt-100">
            <Row>
              {/* {biodiversitys.map(bio => console.log(bio.judul))} */}
              {/* {console.log(typeof biodiversitys.data)}
              {console.log(biodiversitys)} */}
              {/* {if () {
                
              } else {
                
              }} */}
              {/* {biodiversitys.map((biodiversity, index) => (
                <Col xs={12} lg={4} sm={12} md={4} style={{ marginTop: 50 }}>
                  <div
                    className="news-container"
                    style={{
                      backgroundImage: `url(${
                        import.meta.env.VITE_APP_BASEURL +
                        "/" +
                        biodiversity.path
                      })`,
                    }}
                  >
                    <div className="news-content">
                      <a href={"/user/biodiversity/" + biodiversity.id}>
                        <h5>{biodiversity.judul}</h5>
                      </a>
                    </div>
                  </div>
                </Col>
              ))} */}
            </Row>
          </div>
          <div style={{ backgroundColor: "#FFF" }} className="mt-100">
            _
          </div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Biodiversity;
