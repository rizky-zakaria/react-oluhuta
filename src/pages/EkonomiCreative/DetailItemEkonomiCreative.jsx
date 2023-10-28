import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import "../../assets/css/text-justify.css";
import toast from "react-hot-toast";
import Api from "../../api";
import Cookies from "js-cookie";
import { rupiahConvert } from "../../helpers/RupiahConvert.js";

function DetailItemEkonomiCreative() {
  document.title = "Oluhuta Jorney";

  const [products, setProducts] = useState([]);
  const [harga, setHarga] = useState();
  const navigate = useNavigate();
  const [qty, setQty] = useState("");
  const token = Cookies.get("token");
  let { id } = useParams();
  const [validation, setValidation] = useState({});

  const fetchData = async () => {
    await Api.get("/api/client/product/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response);
      setProducts(response.data.data);
      // rupiahConvert(response.data.data.harga);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const storeCategory = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("qty", qty);
    formData.append("id", id);
    console.log(formData);
    const response = await Api.post(
      "/api/client/transaksis/payment",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      }
    )
      .then(() => {
        toast.success("Data Saved Successfully!", {
          duration: 4000,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

        navigate("/user/transaksis/payment/pending");
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

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
                        import.meta.env.VITE_APP_BASEURL + "/" + products.path
                      }
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4} sm={12} md={4}>
                <div className="card mb-3">
                  <div className="card-body">
                    <strong>
                      {products.product} <br />
                      {products.harga}
                    </strong>
                    <form onSubmit={storeCategory} className="mt-2">
                      <input
                        type="number"
                        className="form-control"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        placeholder="Enter Category Name"
                        required
                      />
                      {validation.qty && (
                        <div className="alert alert-danger">
                          {validation.qty[0]}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="btn btn-sm btn-success mt-1 w-100"
                      >
                        Pesan Sekarang
                      </button>
                    </form>
                  </div>
                </div>
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

export default DetailItemEkonomiCreative;
