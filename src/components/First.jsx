import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineInfo } from "react-icons/ai";
import Slider from "react-slick";
import chip_black from "../assets/chip_black.png";
import chip_orange from "../assets/chip_orange.png";
import chip_purple from "../assets/chip_purple.png";

import roulette_1 from "../assets/roulette_1.png";
import roulette_2 from "../assets/roulette_2.png";
import roulette_3 from "../assets/roulette_3.png";
import roulette_4 from "../assets/roulette_4.png";
import roulette_5 from "../assets/roulette_5.png";

import tri_red from "../assets/tri1-red.png";
import tri_black from "../assets/tri2-black.png";

const First = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const spinRoulette = () => {
    // Set isSpinning to true to start the animation
    setIsSpinning(true);

    // Simulate stopping after some time (e.g., 5 seconds)
    setTimeout(() => {
      setIsSpinning(false);
    }, 5000);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };
  return (
    <>
      <div className="first_main px-lg-5 px-4 pt-5">
        <div className="row custom_border_row py-3 px-lg-4 ps-3">
          {/* for top buttons.... */}
          <div className="col">
            <div className="d-flex align-items-center justify-content-between">
              <div className="back_arrow">
                <BiArrowBack />
              </div>
              <button className="btn_common">USER ID :- 1234567890</button>
              <button className="btn_common">POINT :- 100000</button>
              <button className="btn_common">WIN :- 200000</button>
              <button className="btn_common">DATE :- 1/3/23</button>
              <button className="btn_common">TIME :- 02:00</button>
              <div className="info_btn">
                <AiOutlineInfo />
              </div>
            </div>
          </div>
          {/* for top buttons end.... */}

          <div className="row mt-lg-5 mt-4">
            {/* for left on the desktop */}
            <div className="col-lg-3 d-none d-lg-block ">
              <div className="d-flex">
                <button
                  style={{ backgroundColor: "#00DD00" }}
                  className="btn text-white  me-3"
                >
                  01:00
                </button>
                <button style={{ backgroundColor: "white" }} className="btn">
                  total bat 10000
                </button>
              </div>
              <div className="mt-4 mb-lg-0 mb-4">
                <Slider {...settings}>
                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">500</h6>
                    <img src={chip_black} alt="" className="chip_img" />
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">200</h6>
                    <img src={chip_orange} alt="" className="chip_img" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">100</h6>
                    <img src={chip_purple} alt="" className="chip_img" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">500</h6>
                    <img src={chip_black} alt="" className="chip_img" />
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">200</h6>
                    <img src={chip_orange} alt="" className="chip_img" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">100</h6>
                    <img src={chip_purple} alt="" className="chip_img" />
                  </div>
                </Slider>
              </div>

              <div className="mt-4 mb-lg-0 mb-4">
                <div className="rolet_container" onClick={spinRoulette}>
                  <img src={roulette_1} alt="" className="rolet1" />
                  <img
                    src={roulette_2}
                    alt=""
                    className={`rolet2 ${isSpinning ? "spinning" : ""}`}
                  />
                  <img src={roulette_3} alt="" className="rolet3" />
                  <img src={roulette_4} alt="" className="rolet4" />
                  <img src={roulette_5} alt="" className="rolet5" />
                </div>
              </div>
            </div>

            {/* mobile view */}

            <div className="row d-flex d-lg-none  align-items-center justify-content-between  my-4">
              <div className="col-8 px-5">
                <Slider {...settings}>
                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">500</h6>
                    <img src={chip_black} alt="" className="chip_img" />
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">200</h6>
                    <img src={chip_orange} alt="" className="chip_img" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">100</h6>
                    <img src={chip_purple} alt="" className="chip_img" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">500</h6>
                    <img src={chip_black} alt="" className="chip_img" />
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">200</h6>
                    <img src={chip_orange} alt="" className="chip_img" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <h6 className="num">100</h6>
                    <img src={chip_purple} alt="" className="chip_img" />
                  </div>
                </Slider>

                <div className="row mt-5">
                  <div
                    className="col-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgb(255, 37, 37)",
                      borderTopLeftRadius: "15px",
                      borderBottomLeftRadius: "15px",
                    }}
                  >
                    <h6 className="text-white mt-2">19</h6>
                  </div>
                  <div
                    className="col-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgb(32, 32, 32)",
                    }}
                  >
                    <h6 className="text-white mt-2">35</h6>
                  </div>
                  <div
                    className="col-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgb(255, 37, 37)",
                    }}
                  >
                    <h6 className="text-white mt-2">23</h6>
                  </div>
                  <div
                    className="col-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgb(32, 32, 32)",
                    }}
                  >
                    <h6 className="text-white mt-2">17</h6>
                  </div>
                  <div
                    className="col-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#00DD00",
                    }}
                  >
                    <h6 className="text-white mt-2">00</h6>
                  </div>
                  <div
                    className="col-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgb(255, 37, 37)",
                    }}
                  >
                    <h6 className="text-white mt-2">34</h6>
                  </div>
                  <div
                    className="col-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgb(255, 37, 37)",
                    }}
                  >
                    <h6 className="text-white mt-2">5</h6>
                  </div>
                  <div
                    className="col-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgb(32, 32, 32)",
                    }}
                  >
                    <h6 className="text-white mt-2">22</h6>
                  </div>
                  <div
                    className="col-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgb(32, 32, 32)",
                    }}
                  >
                    <h6 className="text-white mt-2">10</h6>
                  </div>
                  <div
                    className="col-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgb(32, 32, 32)",
                      borderTopRightRadius: "15px",
                      borderBottomRightRadius: "15px",
                    }}
                  >
                    <h6 className="text-white mt-2">2</h6>
                  </div>
                </div>
              </div>
              <div className="col-4 ps-5 d-flex align-items-center justify-content-end ">
              <div className="rolet_container" onClick={spinRoulette}>
                  <img src={roulette_1} alt="" className="rolet1" />
                  <img
                    src={roulette_2}
                    alt=""
                    className={`rolet2 ${isSpinning ? "spinning" : ""}`}
                  />
                  <img src={roulette_3} alt="" className="rolet3" />
                  <img src={roulette_4} alt="" className="rolet4" />
                  <img src={roulette_5} alt="" className="rolet5" />
                </div>
              </div>
            </div>

            {/* mobile view end */}

            {/* for left on the desktop end... */}

            {/* for table */}

            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-11 p-0">
                  <Table>
                    <tbody>
                      <tr>
                        <td
                          className="m-0 px-3 position-relative "
                          style={{
                            backgroundColor: "#00DD00",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                          rowSpan={3}
                        >
                          <h3
                            className="text-white"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            0
                          </h3>
                        </td>
                        <td
                          className="m-0 position-relative "
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white ms-2">1</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white ms-2">6</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white ms-2">9</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">12</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">15</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">18</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">21</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">24</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">27</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">30</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">33</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">35</h3>
                        </td>
                        <td
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <p className="text-white rotate_text fw-bold mt-2">
                            2 to 1
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="m-0 position-relative "
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white ms-2">1</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white ms-2">6</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white ms-2">9</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">12</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">15</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">18</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">21</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">24</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">27</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">30</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">33</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">35</h3>
                        </td>
                        <td
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <p className="text-white rotate_text fw-bold mt-2">
                            2 to 1
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="m-0 position-relative "
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white ms-2">1</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white ms-2">6</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white ms-2">9</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">12</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">15</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">18</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">21</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">24</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">27</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">30</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(32, 32, 32)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">33</h3>
                        </td>
                        <td
                          style={{
                            backgroundColor: "rgb(255, 37, 37)",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <h3 className="text-white">35</h3>
                        </td>
                        <td
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                            height: "63px",
                            width: "43px",
                          }}
                        >
                          <p className="text-white rotate_text fw-bold mt-2">
                            2 to 1
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="border-0"
                          style={{ background: "transparent" }}
                        ></td>
                        <td
                          colSpan={4}
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                          }}
                        >
                          <h4 className="text-white text-center">1 st 12</h4>
                        </td>
                        <td
                          colSpan={4}
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                          }}
                        >
                          <h4 className="text-white text-center">1 st 12</h4>
                        </td>
                        <td
                          colSpan={4}
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                          }}
                        >
                          <h4 className="text-white text-center">1 st 12</h4>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="border-0"
                          style={{ background: "transparent" }}
                        ></td>
                        <td
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                          }}
                          colSpan={2}
                        >
                          <h6 className="text-white text-center mt-2">
                            1 to 18
                          </h6>
                        </td>
                        <td
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                          }}
                          colSpan={2}
                        >
                          <h6 className="text-white text-center mt-2">EVEN</h6>
                        </td>
                        <td
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                          }}
                          colSpan={2}
                        >
                          <h6 className="text-white text-center">
                            <img src={tri_red} className="tri_img" alt="" />
                          </h6>
                        </td>
                        <td
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                          }}
                          colSpan={2}
                        >
                          <h6 className="text-white text-center">
                            {" "}
                            <img src={tri_black} className="tri_img" alt="" />
                          </h6>
                        </td>
                        <td
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                          }}
                          colSpan={2}
                        >
                          <h6 className="text-white text-center mt-2">
                            1 to 18
                          </h6>
                        </td>
                        <td
                          style={{
                            background: "transparent",
                            border: "1.5px solid white",
                          }}
                          colSpan={2}
                        >
                          <h6 className="text-white text-center mt-2">EVEN</h6>
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <div className="col mt-4 d-flex align-items-center justify-content-between">
                    <button className="common_btn2">TAKE</button>
                    <button className="common_btn2">CANCEL BET</button>
                    <button className="common_btn2">SPACIFIC CANCEL</button>
                    <button className="common_btn2">PREVIOUS BET</button>
                    <button className="common_btn2">BET OK</button>
                  </div>
                </div>
              </div>
            </div>

            {/* for table end */}

            <div className="col-1 d-none d-lg-block ">
              <div className="row">
                <div className="px-3">
                  <div
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      backgroundColor: "rgb(255, 37, 37)",
                      borderBottom: "1.5px solid black",
                    }}
                    className="col d-flex align-items-center justify-content-center"
                  >
                    <h6 className="text-white mt-2">19</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="px-3">
                  <div
                    style={{
                      backgroundColor: "rgb(32, 32, 32)",
                      borderBottom: "1.5px solid black",
                    }}
                    className="col d-flex align-items-center justify-content-center"
                  >
                    <h6 className="text-white mt-2">35</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="px-3">
                  <div
                    style={{
                      backgroundColor: "rgb(255, 37, 37)",
                      borderBottom: "1.5px solid black",
                    }}
                    className="col d-flex align-items-center justify-content-center"
                  >
                    <h6 className="text-white mt-2">23</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="px-3">
                  <div
                    style={{
                      backgroundColor: "rgb(32, 32, 32)",
                      borderBottom: "1.5px solid black",
                    }}
                    className="col d-flex align-items-center justify-content-center"
                  >
                    <h6 className="text-white mt-2">17</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="px-3">
                  <div
                    style={{
                      backgroundColor: "#00DD00",
                      borderBottom: "1.5px solid black",
                    }}
                    className="col d-flex align-items-center justify-content-center"
                  >
                    <h6 className="text-white mt-2">00</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="px-3">
                  <div
                    style={{
                      backgroundColor: "rgb(255, 37, 37)",
                      borderBottom: "1.5px solid black",
                    }}
                    className="col d-flex align-items-center justify-content-center"
                  >
                    <h6 className="text-white mt-2">34</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="px-3">
                  <div
                    style={{
                      backgroundColor: "rgb(255, 37, 37)",
                      borderBottom: "1.5px solid black",
                    }}
                    className="col d-flex align-items-center justify-content-center"
                  >
                    <h6 className="text-white mt-2">5</h6>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="px-3">
                  <div
                    style={{
                      backgroundColor: "rgb(32, 32, 32)",
                      borderBottom: "1.5px solid black",
                    }}
                    className="col d-flex align-items-center justify-content-center"
                  >
                    <h6 className="text-white mt-2">22</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="px-3">
                  <div
                    style={{
                      backgroundColor: "rgb(32, 32, 32)",
                      borderBottom: "1.5px solid black",
                    }}
                    className="col d-flex align-items-center justify-content-center"
                  >
                    <h6 className="text-white mt-2">10</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="px-3">
                  <div
                    style={{
                      backgroundColor: "rgb(32, 32, 32)",
                      borderBottomLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                    }}
                    className="col d-flex align-items-center justify-content-center"
                  >
                    <h6 className="text-white mt-2">2</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="for_phone">
        <h3>Please rotate your phone</h3>
      </div>
    </>
  );
};

export default First;
