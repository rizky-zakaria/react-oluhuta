import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
import Api from "../../api";

//import js cookie
import Cookies from "js-cookie";
function Scanner() {
  document.title = "Oluhuta Jorney";
  const navigate = useNavigate();

  const token = Cookies.get("token");
  const [user, setUser] = useState({});

  const [scanResult, setScanResult] = useState(null);

  const fetchDataUser = async () => {
    //fetching Rest API "user"
    await Api.get("/api/admin/user", {
      headers: {
        //header Bearer + Token
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      //set data to state
      setUser(response.data);
    });
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }

    if (token) {
      //call function "fetchDataUser"
      fetchDataUser();
    }
  }, []);

  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-100">
          <center>
            <div className="App">
              <h1>Scan Kunjungan</h1>
              {scanResult === null ? (
                <div id="reader"></div>
              ) : (
                <div>
                  <a href={scanResult + user.id} className="btn btn-success">
                    Tandai Kunjungan
                  </a>
                </div>
              )}
            </div>
          </center>
        </div>
        <div className="mt-100"></div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Scanner;
