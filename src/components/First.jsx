import React from "react";
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
  };
  return (
    <>
      <div className="first_main px-5">
        <div className="row custom_border_row py-3 px-4">
          <div className="col">
            <div className="d-flex align-items-center justify-content-between ">
              <div className="back_arrow">
                <BiArrowBack />
              </div>
              <div className="btn_common">
                <h6 className="mb-0">USER ID :- 1234567890</h6>
              </div>
              <div className="btn_common">
                <h6 className="mb-0">POINT :- 100000</h6>
              </div>
              <div className="btn_common">
                <h6 className="mb-0">WIN :- 200000</h6>
              </div>
              <div className="btn_common">
                <h6 className="mb-0">DATE :- 1/3/23</h6>
              </div>
              <div className="btn_common">
                <h6 className="mb-0">TIME :- 02:00</h6>
              </div>
              <div className="info_btn">
                <AiOutlineInfo />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3">
              <div className="d-flex">
                <button
                  className="btn_common2 me-3"
                  style={{ backgroundColor: "#00dd00" }}
                >
                  <h6 className="mb-0">01 : 00</h6>
                </button>
                <button className="btn_common2">
                  <h6 className="mb-0" style={{ fontSize: ".8rem" }}>
                    total bat <br />
                    10000
                  </h6>
                </button>
              </div>
              <div className="mt-4">
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

              <div className="mt-4">
                <div className="rolet_container">
                  <img src={roulette_1} alt="" className="rolet1" />
                  <img src={roulette_2} alt="" className="rolet2" />
                  <img src={roulette_3} alt="" className="rolet3" />
                  <img src={roulette_4} alt="" className="rolet4" />
                  <img src={roulette_5} alt="" className="rolet5" />
                </div>
              </div>
            </div>

            <div className="col-9 ps-5">
              <div className="col-11">
                <div className="row">
                  <div className="row ">
                    <div
                      className="col-2 custom_tri_main d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "#00dd00" }}
                    >
                      <div className="tri1"></div>
                      <div className="tri2"></div>
                      <h3 className="text-white ms-5">0</h3>
                    </div>
                    <div className="col-9">
                      <div className="row">
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">3</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">6</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">9</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">12</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">15</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">18</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">21</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">24</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">27</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">30</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">33</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">36</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">2</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">5</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">8</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">11</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">14</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">17</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">20</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">23</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">26</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">29</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">32</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">35</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">1</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">4</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">7</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">10</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">13</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">15</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">19</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">22</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">25</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">28</h3>
                        </div>
                        <div className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-black-custom">
                          <h3 className="text-white">32</h3>
                        </div>
                        <div
                          style={{ height: "75px" }}
                          className="col-1 custom_border1 d-flex align-items-center justify-content-center py-3 bg-danger-custom"
                        >
                          <h3 className="text-white">34</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="row">
                        <div
                          style={{ height: "75px" }}
                          className="col custom_border1 d-flex align-items-center justify-content-center py-3"
                        >
                          <h6 className="text-white rotate_text">2 to 1</h6>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          style={{ height: "75px" }}
                          className="col custom_border1 d-flex align-items-center justify-content-center py-3"
                        >
                          <h6 className="text-white rotate_text">2 to 1</h6>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          style={{ height: "75px" }}
                          className="col custom_border1 d-flex align-items-center justify-content-center py-3"
                        >
                          <h6 className="text-white rotate_text">2 to 1</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-9 m-0 p-0 d-flex">
                      <div className="col-4 m-0 p-0 custom_border overflow-hidden">
                        <div className="row m-0 p-0">
                          <div className="col d-flex align-items-center justify-content-center py-2 ">
                            <h2 className="text-white">1 st 12</h2>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            style={{ height: "50px" }}
                            className="col-6 custom_border d-flex align-items-center justify-content-center pt-2"
                          >
                            <h5 className="text-white">1 to 18</h5>
                          </div>
                          <div
                            style={{ height: "50px" }}
                            className="col-6 custom_border d-flex align-items-center justify-content-center pt-2"
                          >
                            <h5 className="text-white">EVEN</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 m-0 p-0 custom_border overflow-hidden">
                        <div className="row m-0 p-0">
                          <div className="col d-flex align-items-center justify-content-center py-2">
                            <h2 className="text-white">2 nd 12</h2>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            style={{ height: "50px" }}
                            className="col-6 custom_border d-flex align-items-center justify-content-center py-2"
                          >
                            <img src={tri_red} alt="" className="tri_img" />
                          </div>
                          <div
                            style={{ height: "50px" }}
                            className="col-6 custom_border d-flex align-items-center justify-content-center py-2"
                          >
                            <img src={tri_black} alt="" className="tri_img" />
                          </div>
                        </div>
                      </div>
                      <div className="col-4 m-0 p-0 custom_border overflow-hidden">
                        <div className="row m-0 p-0">
                          <div className="col d-flex align-items-center justify-content-center py-2">
                            <h2 className="text-white">1 st 12</h2>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            style={{ height: "50px" }}
                            className="col-6 custom_border d-flex align-items-center justify-content-center pt-2"
                          >
                            <h5 className="text-white">ODD</h5>
                          </div>
                          <div
                            style={{ height: "50px" }}
                            className="col-6 custom_border d-flex align-items-center justify-content-center pt-2"
                          >
                            <h5 className="text-white">19 to 36</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1"></div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col d-flex align-items-center justify-content-between">
                    <button className="common_btn2">TAKE</button>
                    <button className="common_btn2">CANCEL BET</button>
                    <button className="common_btn2">SPACIFIC CANCEL</button>
                    <button className="common_btn2">PREVIOUS BET</button>
                    <button className="common_btn2">BET OK</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col custom_col">
          <div className="row">
            <div
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
              className="col py-1 bg-danger-custom d-flex align-items-center justify-content-center"
            >
              <h6 className="text-white">19</h6>
            </div>
          </div>
          <div className="row">
            <div
              style={{ borderTop: "1px solid black" }}
              className="col py-1 bg-black-custom d-flex align-items-center justify-content-center"
            >
              <h6 className="text-white">35</h6>
            </div>
          </div>
          <div className="row">
            <div
              style={{ borderTop: "1px solid black" }}
              className="col py-1 bg-danger-custom d-flex align-items-center justify-content-center"
            >
              <h6 className="text-white">23</h6>
            </div>
          </div>
          <div className="row">
            <div
              style={{ borderTop: "1px solid black" }}
              className="col py-1 bg-black-custom d-flex align-items-center justify-content-center"
            >
              <h6 className="text-white">17</h6>
            </div>
          </div>
          <div className="row">
            <div
              style={{ backgroundColor: "#00DD00" }}
              className="col py-1 d-flex align-items-center justify-content-center"
            >
              <h6 className="text-white">00</h6>
            </div>
          </div>
          <div className="row">
            <div
              style={{ borderTop: "1px solid black" }}
              className="col  py-1 bg-danger-custom d-flex align-items-center justify-content-center"
            >
              <h6 className="text-white">34</h6>
            </div>
          </div>
          <div className="row">
            <div
              style={{ borderTop: "1px solid black" }}
              className="col py-1 bg-danger-custom d-flex align-items-center justify-content-center"
            >
              <h6 className="text-white">5</h6>
            </div>
          </div>
          <div className="row">
            <div
              style={{ borderTop: "1px solid black" }}
              className="col py-1 bg-black-custom d-flex align-items-center justify-content-center"
            >
              <h6 className="text-white">22</h6>
            </div>
          </div>
          <div className="row">
            <div
              style={{ borderTop: "1px solid black" }}
              className="col py-1 bg-black-custom d-flex align-items-center justify-content-center"
            >
              <h6 className="text-white">10</h6>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
              }}
              className="col py-1 bg-black-custom d-flex align-items-center justify-content-center"
            >
              <h6 className="text-white">2</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;