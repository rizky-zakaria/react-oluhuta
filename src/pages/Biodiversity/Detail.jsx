import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";
import Api from "../../api";
import Cookies from "js-cookie";

function DetailBiodiversity() {
  document.title = "Oluhuta Jorney";

  let { id } = useParams();
  const [biodiversitys, setBiodiversitys] = useState([]);
  const [biodiversity, setBiodiversity] = useState([]);

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const fetchDataDetail = async () => {
    await Api.get("/api/client/geodiveristy/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setBiodiversity(response.data.data);
    });
  };

  const fetchData = async () => {
    await Api.get("/api/client/biodiversity", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setBiodiversitys(response.data.data);
    });
  };

  const regex = /(<([^>]+)>)/gi;
  useEffect(() => {
    fetchData();
    fetchDataDetail();
  }, []);

  return (
    <React.Fragment>
      <LayoutWeb>
        <div style={{ backgroundColor: "#FFF" }}>
          <div className="container mt-100">
            <Row>
              <Col xs={12} lg={8} sm={12} md={8}>
                <div className="card">
                  <div className="card-body">
                    <img
                      src={
                        import.meta.env.VITE_APP_BASEURL +
                        "/" +
                        biodiversity.path
                      }
                      className="card-img-top"
                      alt=""
                    />
                    <h5 className="mb-3">{biodiversity.judul}</h5>
                    {biodiversity.isi.replace(regex, "")}
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4} sm={12} md={4}>
                {biodiversitys.map((bio, index) => (
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
                ))}
              </Col>
            </Row>
          </div>
          <div className="mt-100" style={{ backgroundColor: "#FFF" }}>
            _
          </div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default DetailBiodiversity;
