import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footermain bg-neutral-600/60 ">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-1">
            <img src="./assets/img/Ekologiya ITI logo.svg" alt="" />
          </div>
          <div className="col-span-2">
            <p className="text-[13px] ms-3 text-white mt-2 ">
              Atrof muhit va tabiatni <br /> muhofaza qilish texnalogiyalari
              ilmiy tadqiqot instituti
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-slate-900 text-[20px]"><ins>Institut tarixi</ins></p>
            <ul>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Tuzulma</Link>
              </li>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Raxbaryat</Link>
              </li>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Vazifalar</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2  ">
          <p className="text-slate-900 text-[21px]"><ins>So'ngi yangiliklar</ins></p>
            <ul>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">E'lonlar</Link>
              </li>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Loyihlar</Link>
              </li>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Ilmiy jurnallar</Link>
              </li>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Xalqaro jurnallar</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
          <p className="text-slate-900 text-[21px]"><ins>Matbuot</ins></p>
            <ul>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Anons</Link>
              </li>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Voqealar taqvimi</Link>
              </li>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Matbuot aloqalari</Link>
              </li>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Majlislar</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 ">
          <p className="text-slate-900 text-[21px]"><ins>Bog'lanish</ins></p>
            <ul>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Manzil</Link>
              </li>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Kontaktlar</Link>
              </li>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">IQAir</Link>
              </li>
              <li className="text-slate-800 ms-1">
                <Link className="text-[17px]">Ma'lumotlar</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 ms-5">
            <p className="text-slate-900 text-[21px]"><ins>Email</ins></p>
            <p className="text-slate-800">Emailingizni kiriting</p>
            <input className="p-1 border-none rounded-md w-36" type="email" placeholder="E-mail" />
            <button className="bg-blue-500 px-4 py-1 mt-2 ms-12 text-white rounded-full">Jo'natish</button>
          </div>
        </div>
      </div>
    </div>
  );
}
