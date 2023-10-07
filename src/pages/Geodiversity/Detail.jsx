import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";
import Cookies from "js-cookie";
import Api from "../../api";

function DetailGeodiversity() {
  document.title = "Oluhuta Jorney";
  const [geodiversity, setGeodiversity] = useState([]);
  const [geodiversitys, setGeodiversitys] = useState([]);
  let { id } = useParams();

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const fetchDataDetail = async () => {
    await Api.get("/api/client/geodiveristy/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setGeodiversity(response.data.data);
    });
  };

  const fetchData = async () => {
    await Api.get("/api/client/geodiveristy", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setGeodiversitys(response.data.data);
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
        <div className="container mt-100">
          <Row>
            <Col xs={12} lg={8} sm={12} md={8}>
              <div className="card">
                <div className="card-body">
                  <img
                    src={
                      import.meta.env.VITE_APP_BASEURL + "/" + geodiversity.path
                    }
                    className="card-img-top"
                    alt=""
                  />
                  <h5 className="mb-3">{geodiversity.judul}</h5>
                  {geodiversity.isi.replace(regex, "")}
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4} sm={12} md={4}>
              {geodiversitys.map((geo, index) => (
                <div className="card mb-3" key={index}>
                  <div className="card-body">
                    <img
                      src={import.meta.env.VITE_APP_BASEURL + "/" + geo.path}
                      className="card-img-top"
                      alt=""
                    />
                    <a href={"/user/geodiversity/" + geo.id}>
                      <h5>{geo.judul}</h5>
                    </a>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </div>
        <div className="mt-100"></div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default DetailGeodiversity;
