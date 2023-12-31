import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Login from "../pages/web/Login/Login.jsx";
import Home from "../pages/web/Home/Index.jsx";
import Contact from "../pages/web/Contact/Index.jsx";
import About from "../pages/web/About/Index.jsx";
import Geodiversity from "../pages/Geodiversity/Index";
import DetailGeodiversity from "../pages/Geodiversity/Detail";
import Culturdiversity from "../pages/Culturdiversity/Index";
import DetailCulturdiversity from "../pages/Culturdiversity/Detail";
import Biodiversity from "../pages/Biodiversity/Index";
import DetailBiodiversity from "../pages/Biodiversity/Detail";
import EkonomiCreative from "../pages/EkonomiCreative/Index";
import DetailEkonomiCreative from "../pages/EkonomiCreative/Detail";
import DetailItemEkonomiCreative from "../pages/EkonomiCreative/DetailItemEkonomiCreative";
import Scanner from "../pages/Scaner/Index";
import Rental from "../pages/Rental/Index";
import DetailRental from "../pages/Rental/Detail";
import DetailItemRental from "../pages/Rental/DetailItemRental";
import Kuliner from "../pages/Kuliner/Index";
import DetailKuliner from "../pages/Kuliner/Detail";
import DetailItemKuliner from "../pages/Kuliner/DetailItemKuliner";
import CheckoutEkonomiCreative from "../pages/EkonomiCreative/Checkout";
import CheckoutRental from "../pages/Rental/Checkout";
import Checkout from "../pages/Checkout/Checkout";
import Profile from "../pages/Profile/Index";
import Register from "../pages/web/Register/Register";
import DetailBerita from "../pages/web/Home/Detail";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/berita/:id" element={<DetailBerita />} />
      <Route
        path="/user/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/geodiversity"
        element={
          <PrivateRoute>
            <Geodiversity />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/geodiversity/:id"
        element={
          <PrivateRoute>
            <DetailGeodiversity />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/culturdiversity"
        element={
          <PrivateRoute>
            <Culturdiversity />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/culturdiversity/:id"
        element={
          <PrivateRoute>
            <DetailCulturdiversity />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/biodiversity"
        element={
          <PrivateRoute>
            <Biodiversity />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/biodiversity/:id"
        element={
          <PrivateRoute>
            <DetailBiodiversity />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/ekonomi-creative"
        element={
          <PrivateRoute>
            <EkonomiCreative />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/ekonomi-creative/:id"
        element={
          <PrivateRoute>
            <DetailEkonomiCreative />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/ekonomi-creative/item/:id"
        element={
          <PrivateRoute>
            <DetailItemEkonomiCreative />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/scan/"
        element={
          <PrivateRoute>
            <Scanner />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/rental"
        element={
          <PrivateRoute>
            <Rental />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/rental/:id"
        element={
          <PrivateRoute>
            <DetailRental />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/rental/item/:id"
        element={
          <PrivateRoute>
            <DetailItemRental />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/kuliner"
        element={
          <PrivateRoute>
            <Kuliner />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/kuliner/:id"
        element={
          <PrivateRoute>
            <DetailKuliner />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/kuliner/item/:id"
        element={
          <PrivateRoute>
            <DetailItemKuliner />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/transaksis/payment/:status"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RoutesIndex;
