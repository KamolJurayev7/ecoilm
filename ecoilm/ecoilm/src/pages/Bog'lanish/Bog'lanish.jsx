import React from 'react'
import { FaMap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Boglanish() {
  return (
    <div className='container'>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <p>Aloqa</p>
          <p>Dushanba - Juma</p>
          <p>09:00 dan 18:00 gacha</p>
          <hr />
          <p>Manzil</p>
          <div className='d_flex'>
          <FaMap />
          <p>O'zbekiston Respublikasi Toshkent shaxri Chilonzor tumani , Bunyodkor shoh ko'chasi,7-A uy</p>
          </div>
          <p>Telefon raqam</p>
          <div className="d_flex">
          <FaPhone />
          <p>+998 71 207 11 07</p>
          <p>+998 71 207 07 70</p>
          </div>
        </div>
        <div className="col-span-8"></div>
      </div>
    </div>
  )
}
