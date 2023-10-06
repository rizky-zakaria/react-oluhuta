import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";
import Api from "../../api";
import Cookies from "js-cookie";

function Culturdiversity() {
  document.title = "Oluhuta Jorney";
  const [culturdiversitys, setCulturdiversitys] = useState([]);

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const fetchData = async () => {
    await Api.get("/api/client/geodiveristy", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setCulturdiversitys(response.data.data);
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
            {culturdiversitys.map((culturdiversity, index) => (
              <Col xs={12} lg={4} sm={12} md={4} key={index}>
                <div className="card mb-3">
                  <div className="card-body">
                    <img
                      src={
                        import.meta.env.VITE_APP_BASEURL +
                        "/" +
                        culturdiversity.path
                      }
                      className="card-img-top"
                      alt=""
                    />
                    <a href={"/user/culturdiversity/" + culturdiversity.id}>
                      <h5>{culturdiversity.judul}</h5>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-100"></div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Culturdiversity;