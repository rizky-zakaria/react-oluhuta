import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";
import Api from "../../api";
import Cookies from "js-cookie";

function DetailCulturdiversity() {
  document.title = "Oluhuta Jorney";
  let { id } = useParams();
  const [culturdiversitys, setCulturdiversitys] = useState([]);
  const [culturdiversity, setCulturdiversity] = useState([]);

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const fetchData = async () => {
    await Api.get("/api/client/culturdiversity", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setCulturdiversitys(response.data.data);
    });
  };

  const fetchDataDetail = async () => {
    await Api.get("/api/client/culturdiversity/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setCulturdiversity(response.data.data);
    });
  };

  useEffect(() => {
    fetchData();
    fetchDataDetail();
  }, []);
  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-100">
          <Row>
            {culturdiversitys.map((cul, index) => (
              <Col xs={12} lg={8} sm={12} md={8} key={index}>
                <div className="card">
                  <div className="card-body">
                    <img
                      src={import.meta.env.VITE_APP_BASEURL + "/" + cul.path}
                      className="card-img-top"
                      alt=""
                    />
                    <h5 className="mb-3">{cul.judul}</h5>
                    {cul.isi}
                  </div>
                </div>
              </Col>
            ))}
            <Col xs={12} lg={4} sm={12} md={4}>
              {culturdiversitys.map((cul, index) => (
                <div className="card mb-3" key={index}>
                  <div className="card-body">
                    <img
                      src={import.meta.env.VITE_APP_BASEURL + "/" + cul.path}
                      className="card-img-top"
                      alt=""
                    />
                    <a href="">
                      <h5>{cul.judul}</h5>
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

export default DetailCulturdiversity;
