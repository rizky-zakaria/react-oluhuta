import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";
import Api from "../../api";
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
  }, []);

  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-100">
          <Row>
            {biodiversitys.map((bio, index) => (
              <Col xs={12} lg={4} sm={12} md={4}>
                <div className="card mb-3">
                  <div className="card-body">
                    <img
                      src={import.meta.env.VITE_APP_BASEURL + "/" + bio.path}
                      className="card-img-top"
                      alt=""
                    />
                    <a href={"/user/biodiversity/" + bio.id}>
                      <h5>{bio.judul}</h5>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Biodiversity;
