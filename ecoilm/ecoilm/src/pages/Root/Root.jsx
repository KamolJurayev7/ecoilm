import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
const contentStyle = {
  height: "760px",
  lineHeight: "60px",
  textAlign: "center",
  background: "#364d79",
};

export default function Root() {
  return (
    <div className="container">
      <div className="mt-3 ">
        <div>
          <Carousel autoplay dotPosition="bottom">
            <div>
              <img style={contentStyle} src="./assets/img/glavniy.JPG" alt="" />
            </div>
            <div>
              <img
                style={contentStyle}
                src="./assets/img/h3.108f5f5c92ec487db40a.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                style={contentStyle}
                src="./assets/img/atrof-muhit.b4c650deb716754b808f.jpg"
                alt=""
              />
            </div>
          </Carousel>
        </div>
        <h3 className="text-center text-2xl text-white">
          Ekologiya, Atrof-muhit muhofazasi va iqlim o'zgarishi yo'nalishida{" "}
          <br /> olib borilayotgan ilmiy tadqiqotlar
        </h3>
        <div className="yangiliklar mt-5">
          <div className="d_flex">
            <p className=" text-xl">Yangiliklar</p>
            <button className="bg-lime-700 text-white px-[10px] py-[5px] rounded-md ms-[920px]">
              Ko'proq yangiliklar
            </button>
          </div>
          <div className="grid grid-cols-7 gap-10">
            <div className="col-span-3">
                <img className=" rounded-lg mt-3 mb-4" src="./assets/img/photo_2024-02-29_11-44-46.jpg" alt="" />
                <p>Atrof-muhit va tabiatni muhofaza qilish texnologiyalari ilmiy-tadqiqot institutida Germaniya xalqaro hamkorlik jamiyati (GIZ)ning O‘zbekistondagi vakolatxonasi xodimlari bilan uchrashuv o‘tkazildi.</p>
                <Link className="text-black text-lg bg-lime-700 mt-3 px-2 py-1 rounded-md  ms-[400px]">
                <ins>Batafsil</ins>
              </Link>
            </div>
            <div className="col-span-4">
              <div className="grid grid-cols-4 mt-3 gap-10">
                <div className="col-span-2 ">
                <img
                className="rounded-lg"
                src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 1.png"
                alt=""
              />
              <p className="text-black  text-lg text-center">
                TXTY-2023: O‘zbekiston va Markaziy Osiyo mintaqasining yirik
                turizm tadbirida ishtirok eting
              </p>
              <Link className="text-black text-lg bg-lime-700 px-2 py-1 rounded-md  ms-[224px]">
                <ins>Batafsil</ins>
              </Link>
                </div>
                <div className="col-span-2 ">
                <img
                className="rounded-lg"
                src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 2.png"
                alt=""
              />
              <p className="text-black  text-lg text-center">
              Samarqandda “Yashil shahar” harakat rejasini ishlab chiqishga
                qaratilgan trening o‘tkazildi
              </p>
              <Link className="text-black text-lg bg-lime-700 px-2 py-1 rounded-md  ms-[224px]">
                <ins>Batafsil</ins>
              </Link>
                </div>
              </div>
              <div className="grid grid-cols-4 mt-3 gap-10">
                <div className="col-span-2  ">
                <img
                className="rounded-lg"
                src="./assets/img/Group 104.png"
                alt=""
              />
              <p className="text-black  text-lg text-center">
              Bolajonlarga ekologiyaga oid brayl alifbosidagi kitoblar sovg‘a
                qilindi
              </p>
              <Link className="text-black text-lg bg-lime-700 px-2 py-1 rounded-md  ms-[224px]">
                <ins>Batafsil</ins>
              </Link>
                </div>
                <div className="col-span-2 ">
                <img
                className="rounded-lg"
                src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 2 (1).png"
                alt=""
              />
              <p className="text-black  text-lg text-center">
              Shavkat Mirziyoyev kuzgi daraxt ekish mavsumini boshlab berdi
              </p>
              <Link className="text-black text-lg bg-lime-700 px-2 py-1 rounded-md  ms-[224px]">
                <ins>Batafsil</ins>
              </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_section mt-[30px] px-3 py-2  bg-slate-500/70 rounded-xl">
          <p className="text-blue-900 text-center text-3xl font-bold">
            Biz haqimizda
          </p>
          <p className="text-white text-xl text-center font-semibold">
            Atrof muhit va atbiatni muhofaza qilish texnologiyalari ilmiy
            tadqiqot instituti haqida qisqacha ma'lumot
          </p>
          <div className="grid grid-cols-2 mt-10 gap-10 text-xl">
            <div className="col-span-1">
              <img
                className="mt-4 ms-3"
                src="./assets/img/glavniy.JPG"
                alt=""
              />
            </div>
            <div className="col-span-1">
              <p className="text-blue-950 text-xl font-semibold">
                Atrof muhit va atbiatni muhofaza qilish texnologiyalari ilmiy
                tadqiqot instituti haqida
              </p>
              <p className="text-white text-sm">
                Toshkent suv ta’minoti, kanalizatsiya, gidrotexnika inshootlari
                va muhandislik gidrogeologiyasi (ToshNII "VODGEO") instituti,
                1960 yilda Markaziy Osiyo arxitektura va qurilish ilmiy-tadqiqot
                institutida aholi punktlari sanoatining suv xo‘jaligi
                laboratoriyasi sifatida tashkil etilgan, 1964 yilda U "VODGEO"
                Butunittifoq ilmiy-tadqiqot institutida suv xo‘jaligi bo‘limi,
                1978 yilda esa "VODGEO" Butunittifoq ilmiy-tadqiqot
                institutining Toshkent filialiga aylantirildi. 1992 yil dekabr
                oyidan boshlab institut O‘zbekiston Respublikasi Tabiatni
                muhofaza qilish davlat qo‘mitasining tarkibiy bo‘linmasi
                hisoblanadi. O‘zbekiston Respublikasi Prezidentining 2017 yil 21
                apreldagi PQ-2915-sonli "O‘zbekiston Respublikasi Ekologiya va
                atrof-muhitni muhofaza qilish davlat qo‘mitasi faoliyatini
                tashkil etishni ta’minlash chora-tadbirlari to‘g‘risida" gi
                farmonini bajarish maqsadida, shuningdek, 2017 yil 26 apreldagi
                146-sonli va 17-sonli, 91-son buyruqlariga muvofiq.
                Guvohnomaning 2017 yil 21 avgustdagi 538681-sonli ma’lumotiga
                ko‘ra, O‘zbekiston Respublikasi Ekologiya va atrof-muhitni
                muhofaza qilish davlat qo‘mitasi, O‘zbekiston Respublikasi
                Ekologiya va atrof-muhitni muhofaza qilish ilmiy-tadqiqot
                instituti ish faoliyatini boshladi. O‘zR Davlat Ekologiya
                qo‘mitasi huzuridagi Ekologiya va atrof-muhitni muhofaza qilish
                ilmiy-tadqiqot instituti ToshITI "SUVGEO", "ITLTI ATMOSFERA" va
                NPGP "Suvni boshqarish ekologiyasi" ning huquqiy vorisi bo‘lgan.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 p-4 grid-cols-12 bg-white rounded-md">
          <div className="col-span-2 pb-3 relative">
            <img
              className="w-24 ms-10 mt-7"
              src="./assets/img/Image [item-img].png"
              alt=""
            />
            <p className="text-center mt-2">Bioxilmaxilik</p>
            <hr className="w-24 left-[137px] top-20 absolute text-black rotate-90 h-1" />
          </div>
          <div className="col-span-2 pb-3 relative">
            <img
              className="w-24 ms-10 mt-7"
              src="./assets/img/Image [item-img] (1).png"
              alt=""
            />
            <p className="text-center mt-2">Yer va Suv resuslari</p>
            <hr className="w-24 left-[137px] top-20 absolute rotate-90 h-1" />
          </div>
          <div className="col-span-2 pb-3 relative">
            <img
              className="w-24 ms-10 mt-7"
              src="./assets/img/Image [item-img] (2).png"
              alt=""
            />
            <p className="text-center mt-2">Atmosfera ifloslanishi </p>
            <hr className="w-24 left-[137px] top-20 absolute rotate-90 h-1" />
          </div>
          <div className="col-span-2 pb-3 relative">
            <img
              className="w-24 ms-10 mt-7"
              src="./assets/img/Image [item-img] (3).png"
              alt=""
            />
            <p className="text-center mt-2">Iqlim o'zgarishi</p>
            <hr className="w-24 left-[137px] top-20 absolute rotate-90 h-1" />
          </div>
          <div className="col-span-2 pb-3 relative">
            <img
              className="w-24 ms-10 mt-7"
              src="./assets/img/Image [item-img] (4).png"
              alt=""
            />
            <p className="text-center mt-2">Iqlim o'zgarishi</p>
            <hr className="w-24 left-[137px] top-20 absolute rotate-90 h-1" />
          </div>
          <div className="col-span-2 pb-3">
            <img
              className="w-24 ms-10 mt-7"
              src="./assets/img/Image [item-img] (5).png"
              alt=""
            />
            <p className="text-center mt-2">Chiqindilarni qayta ishlash </p>
          </div>
        </div>
        <div className="Section_second bg-slate-500/50 px-10 pt-5 mt-3 rounded-xl">
          <div className="d_flex mb-2">
            <p className="text-white ms-3 text-2xl ">Loyihalar</p>
            <button className="bg-lime-700 text-white px-[10px] py-[5px] rounded-md ms-[850px]">
              Batafsil ko'rish
            </button>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <img src="./assets/img/Rectangle 3.png" alt="" />
              <p className="text-white text-center font-bold text-lg">
                Bioxilmaxillikni saqlash
              </p>
            </div>
            <div className="col-span-3">
              <img src="./assets/img/Rectangle 4.png" alt="" />
              <p className="text-white text-center font-bold text-lg">
                Yashil o'sish va iqlim o’zgarishi
              </p>
            </div>
            <div className="col-span-3">
              <img src="./assets/img/Rectangle 5.png" alt="" />
              <p className="text-white text-center font-bold text-lg">
                Atmosfera havosini muhofaza qilish
              </p>
            </div>
            <div className="col-span-3">
              <img src="./assets/img/Rectangle 6.png" alt="" />
              <p className="text-white text-center font-bold text-lg">
                Chiqindilarni qayta ishlash va utilizatsiya qilish
              </p>
            </div>
          </div>
        </div>
        <div className="jurnallar_section">
          <p className="font-bold text-2xl mt-3 ms-3">Jurnallar</p>
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <img
                className="w-60 shadow-xl h-[345px]"
                src="./assets/img/Image [img-fluid].png"
                alt=""
              />
              <button className="bg-blue-500 shadow-lg mt-[16px] ms-32  text-white px-3 rounded-lg py-1">
                Yuklab olish
              </button>
            </div>
            <div className="col-span-3">
              <img
                className="w-60 shadow-xl mt-2 h-[336px]"
                src="./assets/img/Image [img-fluid] (1).png"
                alt=""
              />
              <button className="bg-blue-500 shadow-lg  ms-32 mt-[17px] text-white px-3 rounded-lg py-1">
                Yuklab olish
              </button>
            </div>
            <div className="col-span-3">
              <img
                className="w-60 shadow-xl h-[338px] mt-1"
                src="./assets/img/Image [img-fluid] (2).png"
                alt=""
              />
              <button className="bg-blue-500 shadow-lg  ms-32 mt-[18px] text-white px-3 rounded-lg py-1">
                Yuklab olish
              </button>
            </div>
            <div className="col-span-3">
              <img
                className="w-60 shadow-xl mt-5 h-[322px]"
                src="./assets/img/Image [img-fluid] (3).png"
                alt=""
              />
              <button className="bg-blue-500 shadow-lg  ms-32 mt-[20px] text-white px-3 rounded-lg py-1">
                Yuklab olish
              </button>
            </div>
          </div>
        </div>
        <div className="hamkorlar_section">
          <div className="grid gap-24 grid-cols-12 p-8 px-10">
            <div className="col-span-3">
              <img src="./assets/img/Rectangle 19.png" alt="" />
            </div>
            <div className="col-span-3">
              <img src="./assets/img/Rectangle 19 (1).png" alt="" />
            </div>
            <div className="col-span-3">
              <img src="./assets/img/Rectangle 19 (2).png" alt="" />
            </div>
            <div className="col-span-3">
              <img src="./assets/img/Rectangle 20.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
