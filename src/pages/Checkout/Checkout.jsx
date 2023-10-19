import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";
import Api from "../../api";
import Cookies from "js-cookie";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Checkout() {
  document.title = "Oluhuta Jorney";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [payments, setPayments] = useState([]);
  const { status } = useParams();

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const fetchData = async () => {
    await Api.get("/api/client/transaksis/payment/" + status, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setPayments(response.data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <React.Fragment>
      <LayoutWeb>
        <div style={{ backgroundColor: "#FFF" }}>
          <div className="container mt-100">
            <Row>
              <Col xs={12} lg={12} sm={12} md={12} className="mb-5">
                <div className="card">
                  <div className="card-body d-flex justify-content-center">
                    {status == "capture" ? (
                      <h4> Riwayat Pesanan</h4>
                    ) : (
                      <h4> Daftar Pesanan Belum Di Bayar</h4>
                    )}
                  </div>
                </div>
              </Col>
              {payments.map((payment, index) => (
                <Col xs={12} lg={6} sm={12} md={6} key={index}>
                  <div className="card mb-3">
                    <div className="card-body">
                      <img
                        src={
                          import.meta.env.VITE_APP_BASEURL + "/" + payment.path
                        }
                        className="card-img-top"
                        alt="..."
                      ></img>
                      <table>
                        <thead>
                          <tr>
                            <th>
                              <strong>Order ID</strong>
                            </th>
                            <th>:</th>
                            <th>{payment.order_id}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <strong>Harga</strong>
                            </td>
                            <td>:</td>
                            <td>{payment.harga}</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Status</strong>
                            </td>
                            <td>:</td>
                            <td>{payment.status}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card-footer">
                      {status == "capture" ? (
                        <a
                          href={payment.checkout_link}
                          className="w-100 btn btn-sm btn-secondary"
                          target="_blank"
                        >
                          Cek Status
                        </a>
                      ) : (
                        <a
                          href={payment.checkout_link}
                          className="w-100 btn btn-sm btn-primary"
                          target="_blank"
                        >
                          Bayar Sekarang
                        </a>
                      )}
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

export default Checkout;
