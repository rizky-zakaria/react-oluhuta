import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";
import Api from "../../api";
import Cookies from "js-cookie";

function Kuliner() {
  document.title = "Oluhuta Jorney";

  const [merchants, setMerchants] = useState([]);

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const fetchData = async () => {
    await Api.get("/api/client/kuliner", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setMerchants(response.data.data);
    });
  };
  const regex = /(<([^>]+)>)/gi;
  useEffect(() => {
    fetchData();
  }, []);

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  console.log(merchants);

  return (
    <React.Fragment>
      <LayoutWeb>
        <div style={{ backgroundColor: "#FFF" }}>
          <Image
            src="/assets/img/header-makanan.png"
            xs={12}
            lg={12}
            sm={12}
            md={12}
            width={"100%"}
            className="mb-5 mt-100"
          />
          <div className="container">
            <Row>
              {/* <Col xs={12} lg={12} sm={12} md={12} className="mb-5">
              <div className="card">
                <div className="card-body d-flex justify-content-between">
                  <h5> Lapak Sewa Barang</h5>
                  <div>
                    <a
                      href="/user/transaksis/payment/pending"
                      className="btn btn-sm btn-warning text-light m-1"
                    >
                      Belum Dibayar
                    </a>
                    <a
                      href="/user/transaksis/payment/capture"
                      className="btn btn-sm btn-primary text-light"
                    >
                      Selesai
                    </a>
                  </div>
                </div>
              </div>
            </Col> */}
              {merchants.map((merchant, index) => (
                <Col xs={12} lg={4} sm={12} md={4} key={index}>
                  {/* <a href={"/user/kuliner/" + merchant.id} style={linkStyle}> */}
                  <div
                    className="card mb-3"
                    style={{
                      borderRadius: 10,
                      borderBlockEndColor: "#808080",
                      borderBlockEndWidth: 5,
                      borderRightWidth: 5,
                      borderRightColor: "#808080",
                    }}
                  >
                    <div className="card-body">
                      <img
                        src={
                          import.meta.env.VITE_APP_BASEURL + "/" + merchant.path
                        }
                        className="card-img-top"
                        alt=""
                        style={{ width: 310, height: 310 }}
                      />
                      <div className="card-footer mt-2">
                        <div className="row">
                          <div className="col-12">
                            <h5 className="mt-2">{merchant.product}</h5>
                            <span>
                              {merchant.deskripsi
                                .replace(regex, "")
                                .slice(0, 50)}
                              {"..."}
                              <br />
                            </span>
                            <a
                              href={
                                "https://wa.me/" +
                                merchant.phone +
                                "?text=Silahkan%20Pesan%20Makan%20Yang%20Kamu%20Suka"
                              }
                              style={{ padding: "10px" }}
                              target="__blank"
                              className="btn btn-sm btn-success d-flex justify-content-start"
                            >
                              <img
                                src="../assets/img/wa.png"
                                alt=""
                                width={"7%"}
                              />
                              <span style={{ marginLeft: "10px" }}>
                                Pesan Sekarang
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </a> */}
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

export default Kuliner;
