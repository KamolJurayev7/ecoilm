import React from "react";
import { Link } from "react-router-dom";

export default function Kengash() {
  return (
    <div>
      <div className="relative">
        <img src="./assets/img/Rectangle 7 (1).png" alt="" />
        <p className="absolute top-[120px] text-2xl font-bold left-20 z-10">
          Ilmiy kengash faolyati
        </p>
      </div>
      <div className="container">
        <p className="text-center text-2xl font-semibold mt-4">Ilmiy Kengash</p>
        <div className="grid grid-cols-12 mt-4 gap-8">
          <div className="col-span-6">
            <img
              className="shadow-xl"
              src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 1.png"
              alt=""
            />
            <p className="font-semibold px-3 py-2">
              Texnika fanlari boʼyicha falsafa doktori (PhD) ilmiy darajasi –
              PhD.18/30.11.2022.T.153.01 raqamli ixtisosligini beruvchi ilmiy
              kengash faoliyati yoʼlga qoʼyildi.
            </p>
            <Link className="text-black shadow-lg text-lg bg-lime-700 mt-3 px-2 py-1 rounded-md  ms-[489px]">
              <ins>Batafsil</ins>
            </Link>
          </div>
          <div className="col-span-6">
            <img
              className="shadow-xl"
              src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 2.png"
              alt=""
            />
            <p className="font-semibold px-3 py-2">
              Аtrof-muhitni muxofaza qilish va tabiiy resurslardan oqilona
              foydalanish ixtisosligidagi ilmiy seminarning 2023 yil 10 mart
              kuni navbatdagi yig‘ilishi o‘tkazildi
            </p>
            <Link className="text-black shadow-lg text-lg bg-lime-700 mt-3 px-2 py-1 rounded-md  ms-[489px]">
              <ins>Batafsil</ins>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-4 gap-8">
          <div className="col-span-6">
            <img
              className="shadow-xl"
              src="./assets/img/Group 104.png"
              alt=""
            />
            <p className="font-semibold px-3 py-2">
              Tadqiqotchi Xodjaeva Sevaraxon Ilxomovnaning 11.00.05 –
              Аtrof-muhitni muxofaza qilish va tabiiy resurslardan oqilona
              foydalanish ixtisosligi bo‘yicha falsafa doktori (PhD) ilmiy
              darajasini olish uchun bajarilgan dissertatsiya ishi muhokamasi
              bo‘lib o‘tadi.
            </p>
            <Link className="text-black shadow-lg text-lg bg-lime-700 mt-3 px-2 py-1 rounded-md  ms-[489px]">
              <ins>Batafsil</ins>
            </Link>
          </div>
          <div className="col-span-6">
            <img
              className="shadow-xl"
              src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 2 (1).png"
              alt=""
            />
            <p className="font-semibold px-3 py-2">
              Texnika fanlari bo‘yicha falsafa doktori (PhD) ilmiy darajasi –
              PhD.18/30.11.2022.T.153.01 raqamli ixtisosligi beruvchi ilmiy
              kengash malakaviy imtihon olish ishlarini boshladi.
            </p>
            <Link className="text-black shadow-lg text-lg bg-lime-700 mt-10 px-2 py-1 rounded-md  ms-[489px]">
              <ins>Batafsil</ins>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 mb-4 mt-4 gap-8">
          <div className="col-span-6">
            <img
              className="shadow-xl"
              src="./assets/img/Group 104.png"
              alt=""
            />
            <p className="font-semibold px-3 py-2">
              Tadqiqotchi Xodjaeva Sevaraxon Ilxomovnaning 11.00.05 –
              Аtrof-muhitni muxofaza qilish va tabiiy resurslardan oqilona
              foydalanish ixtisosligi bo‘yicha falsafa doktori (PhD) ilmiy
              darajasini olish uchun bajarilgan dissertatsiya ishi muhokamasi
              bo‘lib o‘tadi.
            </p>
            <Link className="text-black shadow-lg text-lg bg-lime-700 mt-3 px-2 py-1 rounded-md  ms-[489px]">
              <ins>Batafsil</ins>
            </Link>
          </div>
          <div className="col-span-6">
            <img
              className="shadow-xl"
              src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 2 (1).png"
              alt=""
            />
            <p className="font-semibold px-3 py-2">
              Texnika fanlari bo‘yicha falsafa doktori (PhD) ilmiy darajasi –
              PhD.18/30.11.2022.T.153.01 raqamli ixtisosligi beruvchi ilmiy
              kengash malakaviy imtihon olish ishlarini boshladi.
            </p>
            <Link className="text-black shadow-lg text-lg bg-lime-700 mt-10 px-2 py-1 rounded-md  ms-[489px]">
              <ins>Batafsil</ins>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
