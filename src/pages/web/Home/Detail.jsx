import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../../layouts/Web";
import "../../../assets/css/text-justify.css";
import Api from "../../../api";
import Cookies from "js-cookie";

function DetailBerita() {
  document.title = "Oluhuta Jorney";
  let { id } = useParams();
  const [beritas, setBeritas] = useState([]);
  const [berita, setBerita] = useState([]);

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const fetchData = async () => {
    await Api.get("/api/client/berita", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setBeritas(response.data.data);
    });
  };

  const fetchDataDetail = async () => {
    await Api.get("/api/client/berita/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setBerita(response.data.data);
      console.log(response.data.data);
    });
  };

  const regex = /<\/?[^>]+(>|$)/g;
  // console.log(berita.isi.replace(regex, ""));
  useEffect(() => {
    fetchData();
    fetchDataDetail();
  }, []);
  return (
    <React.Fragment>
      <LayoutWeb>
        <div style={{ backgroundColor: "#FFF" }}>
          <div className="container">
            <Row style={{ paddingTop: 110, paddingBottom: 100 }}>
              <Col xs={12} lg={8} sm={12} md={8}>
                <div className="card">
                  <div className="card-body">
                    <img
                      src={import.meta.env.VITE_APP_BASEURL + "/" + berita.path}
                      className="card-img-top"
                      alt=""
                    />
                    <h5 className="mb-3">{berita.judul}</h5>
                    {/* {berita.isi.replace(regex, "")} */}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: berita.isi,
                      }}
                    ></span>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4} sm={12} md={4}>
                {beritas.map((b, index) => (
                  <div className="card mb-3" key={index}>
                    <div className="card-body">
                      <img
                        src={import.meta.env.VITE_APP_BASEURL + "/" + b.path}
                        className="card-img-top"
                        alt=""
                      />
                      <a href={"/berita/" + b.id}>
                        <h5>{b.judul}</h5>
                      </a>
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </div>
        </div>
        {/* <div className="mt-100" style={{ backgroundColor: "#FFF" }}></div> */}
      </LayoutWeb>
    </React.Fragment>
  );
}

export default DetailBerita;
