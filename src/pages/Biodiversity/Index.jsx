import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";
import "../../assets/css/style-content.css";
import Api from "../../api";
import Cookies from "js-cookie";

function Biodiversity() {
  document.title = "Oluhuta Jorney";
  const [culturdiversitys, setCulturdiversitys] = useState([]);

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const fetchData = async () => {
    await Api.get("/api/client/biodiversity", {
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
        <div style={{ backgroundColor: "#FFF" }}>
          <div className="container mt-100">
            <Row>
              {culturdiversitys.map((culturdiversity, index) => (
                <Col
                  xs={12}
                  lg={4}
                  sm={12}
                  md={4}
                  key={index}
                  style={{ marginTop: 50 }}
                >
                  {/* <div className="card mb-3">
                    <div className="card-body">
                      <img
                        src={
                          import.meta.env.VITE_APP_BASEURL +
                          "/" +
                          culturdiversity.path
                        }
                        className="card-img-top"
                        alt=""
                        style={{ width: 310, height: 310 }}
                      />
                      <a href={"/user/culturdiversity/" + culturdiversity.id}>
                        <h5>{culturdiversity.judul}</h5>
                      </a>
                    </div>
                  </div> */}
                  <div
                    className="news-container"
                    style={{
                      backgroundImage: `url(${
                        import.meta.env.VITE_APP_BASEURL +
                        "/" +
                        culturdiversity.path
                      })`,
                    }}
                  >
                    <div className="news-content">
                      <a href={"/user/culturdiversity/" + culturdiversity.id}>
                        <h5>{culturdiversity.judul.slice(0, 50)}</h5>
                      </a>
                    </div>
                  </div>
                </Col>
              ))}
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

export default Biodiversity;
