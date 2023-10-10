//import hook useState and useEffect from react
import React, { useState, useEffect } from "react";

//import component carousel
import { Carousel } from "react-bootstrap";

//import BASE URL API
import Api from "../../api";

function Slider() {
  //state sliders
  const [sliders, setSliders] = useState([]);

  const slide = [
    import.meta.env.VITE_BASE_URL + "/slider1.png",
    import.meta.env.VITE_BASE_URL + "/slider2.png",
    import.meta.env.VITE_BASE_URL + "/slider3.png",
    import.meta.env.VITE_BASE_URL + "/slider4.png",
    import.meta.env.VITE_BASE_URL + "/slider5.png",
  ];

  //function "fetchDataSliders"
  const fetchDataSliders = async () => {
    //fetching Rest API "sliders"
    await Api.get("/api/web/sliders").then((response) => {
      //set data to state
      setSliders(response.data.data);
      // console.log(response.data.data);
    });
  };

  //hook
  useEffect(() => {
    //call function "fetchDataSliders"
    fetchDataSliders();
  }, []);

  return (
    <Carousel
      prevIcon={
        <i className="fa fa-chevron-left fa-lg carousel-custom text-dark shadow"></i>
      }
      nextIcon={
        <i className="fa fa-chevron-right fa-lg carousel-custom text-dark shadow"></i>
      }
    >
      {/* {slider.map((s) => ( */}
      <Carousel.Item key={1}>
        <img
          className="d-block w-100"
          src="./assets/img/slider1.png"
          style={{ height: "500px", objectFit: "cover" }}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item key={2}>
        <img
          className="d-block w-100"
          src="./assets/img/slider2.png"
          style={{ height: "500px", objectFit: "cover" }}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item key={3}>
        <img
          className="d-block w-100"
          src="./assets/img/slider3.png"
          style={{ height: "500px", objectFit: "cover" }}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item key={4}>
        <img
          className="d-block w-100"
          src="./assets/img/slider4.png"
          style={{ height: "500px", objectFit: "cover" }}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item key={5}>
        <img
          className="d-block w-100"
          src="./assets/img/slider5.png"
          style={{ height: "500px", objectFit: "cover" }}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item key={6}>
        <img
          className="d-block w-100"
          src="./assets/img/slider6.png"
          style={{ height: "500px", objectFit: "cover" }}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item key={7}>
        <img
          className="d-block w-100"
          src="./assets/img/slider7.png"
          style={{ height: "500px", objectFit: "cover" }}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item key={8}>
        <img
          className="d-block w-100"
          src="./assets/img/slider8.png"
          style={{ height: "500px", objectFit: "cover" }}
          alt="First slide"
        />
      </Carousel.Item>
      {/* ))} */}
    </Carousel>
  );
}

export default Slider;
