import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LayoutWeb from "../../layouts/Web";
function Scanner() {
  document.title = "Oluhuta Jorney";

  const navigate = useNavigate();

  const [scanResult, setScanResult] = useState(null);

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
  }, []);

  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-100">
          <center>
            <div className="App">
              <h1>Scan Kunjungan</h1>
              {scanResult ? (
                <div>
                  <a href={scanResult} className="btn btn-success">
                    Tandai Kunjungan
                  </a>
                </div>
              ) : (
                <div id="reader"></div>
              )}
            </div>
          </center>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Scanner;
