import { App, Select } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const img = [
  {
    id: "1",
    img: "./assets/img/Flag_of_Uzbekistan.svg.png",
  },
  {
    id: "2",
    img: "./assets/img/Flag_of_the_United_States.png",
  },
];

export default function Navbar() {
  const [flag, setFlag] = useState(img[0].img);

  function changeimg(e) {
    if (e == "uz") {
      setFlag(img[0].img);
    } else {
      setFlag(img[1].img);
    }
  }

  return (
    <div>
      <div className="countainer">
        <div className="grid grid-cols-12 bg-neutral-600/60">
          <div className="col-span-3">
            <div className="grid grid-cols-4 d-flex ">
              <div className="col-span-2 ms-12">
                <Link to={'/'}>
                  <img
                    className="size-24 "
                    src="./assets/img/Ekologiya ITI logo.svg"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="col-span-2">
                <p className="text-[13px] text-white mt-2 ">
                  Atrof muhit va tabiatni <br /> muhofaza qilish texnalogiyalari
                  ilmiy tadqiqot instituti
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <ul className="flex">
              <li className="ms-3">
                <Link to={"/"}></Link>
              </li>
              <li>
                <Link>
                  <>
                    <div className="dropdown ms-12 ">
                      <button className="dropbtn mt-7 text-lg text-white">
                        Biz Haqimizda
                      </button>
                      <div className="dropdown-content rounded-md ">
                        <Link className="link" to={"/tuzulma"}>
                          Tuzulma
                        </Link>
                        <Link className="link" to={"/vazifa"}>
                          Vazifa va Funksiya
                        </Link>
                        <Link className="link" to={"/labaratoriya"}>
                          Laboratoriya va bo'limlar
                        </Link>
                        <Link className="link" to={"/raxbaryat"}>
                          Rahbaryat
                        </Link>
                        <Link className="link" to={"/boglanish"}>
                          Bog'lanish
                        </Link>
                        <Link className="link" to={"/loyhalar"}>
                          Loyihalar
                        </Link>
                      </div>
                    </div>
                  </>
                </Link>
              </li>
              <li>
                <Link>
                  <>
                    <div className="dropdown ms-14 ">
                      <button className="dropbtn mt-7 text-lg text-white">
                        Yangiliklar
                      </button>
                      <div className="dropdown-content rounded-md ">
                        <Link className="link" to={"/yangiliklar"}>
                          So'ngiz yangiliklar
                        </Link>
                        <Link className="link" to={"/elonlar"}>
                          E'lonlar
                        </Link>
                      </div>
                    </div>
                  </>
                </Link>
              </li>
              <li>
                <Link>
                  <>
                    <div className="dropdown ms-10 ">
                      <button className="dropbtn mt-7 text-lg text-white">
                        Jurnallar
                      </button>
                      <div className="dropdown-content rounded-md ">
                        <Link className="link" to={"/jurnallar"}>
                          Jurnallar
                        </Link>
                        <Link className="link" to={"/maqola"}>
                          Maqola chop etish
                        </Link>
                        <Link className="link" to={"/kutubxona"}>
                          Online kutubxona
                        </Link>
                      </div>
                    </div>
                  </>
                </Link>
              </li>
              <li>
                <div className="mt-7">
                  <Link
                    className=" ms-12 mt-10 text-lg text-white"
                    to={"/kengash"}
                  >
                    Ilmiy kengash
                  </Link>
                </div>
              </li>
              <li>
                <div className="d-flex grid justify-center  grid-cols-3 ms-20 ">
                  <div className="col-span-1 mt-[20px]">
                    <img
                      className=" w-[42px] h-10 rounded-xl bg-black "
                      src={flag}
                      alt=""
                    />
                  </div>
                  <div className="col-span-2 mt-7">
                    <Select
                      className=" ms-4  "
                      defaultValue="Uzbek"
                      style={{
                        width: 110,
                      }}
                      onChange={changeimg}
                      options={[
                        {
                          value: "uz",
                          label: "Uzbek",
                        },
                        {
                          value: "en",
                          label: "English",
                        },
                      ]}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
