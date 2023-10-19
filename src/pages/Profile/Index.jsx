//import layout
import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../layouts/Web";

//import react router dom
import { useNavigate } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../../components/utilities/Footer";
import "../../assets/css/text-justify.css";
import "../../assets/css/aboveSlider.css";
import Api from "../../api";
import Cookies from "js-cookie";

function Profile() {
  document.title =
    "TRAVEL GIS - Website Wisata Berbasis GIS (Geographic Information System)";

  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [profile, setProfile] = useState([]);

  const fetchData = async () => {
    await Api.get("/api/client/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setProfile(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeSession = () => {
    Cookies.remove("token");
    navigate("/user/login");
  };

  return (
    <React.Fragment>
      <LayoutWeb>
        <div style={{ paddingRight: 50, paddingLeft: 50 }}>
          <div className="container mt-100"></div>
          <div className="card">
            <div className="card-body">
              <ul class="list-group">
                <li class="list-group-item">
                  Nama: <br />
                  <b> {profile.name}</b>
                </li>
                <li class="list-group-item">
                  Email: <br />
                  <b> {profile.email}</b>
                </li>
                <li class="list-group-item">
                  Role: <br />
                  <b> {profile.role}</b>
                </li>
                <li class="list-group-item  text-center">
                  <button
                    className="btn btn-danger btn-sm w-100"
                    onClick={removeSession}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-100"></div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Profile;
