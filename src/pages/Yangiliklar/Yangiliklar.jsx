import React from 'react'
import { Link } from 'react-router-dom'
import { IoTimeOutline } from "react-icons/io5";
import './news.css'
export default function Yangiliklar() {
  return (
    <div className='w-[1337px] flex flex-col items-center '>
      <div className='mx-auto w-full relative ' data-aos="fade-right">
        <h1 className='lg:text-[60px] text_shadow md:text-[25px] sm:[20px] font-bold text-[#fefefe] absolute lg:top-[90px] lg:left-[130px] md:top-[70px] left-[120px] sm:top-[100px] sm:left-[100px]'>Yangiliklar</h1>
        <img className='w-full h-[400px] object-cover ' src="https://i.pinimg.com/originals/89/55/6c/89556c05c7164b828aa0ced55d094826.jpg" alt="" />
      </div>
      <div className='w-full h-auto pl-12 py-10 border-t-4 border-t-[#113e21e3] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-5  sm:gap-2'>
        <div className='w-[370px] h-[350px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer'>
          <img className='w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Veritatis rem recusandae possimus excepturi.</p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={20} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='w-[370px] h-[350px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer'>
          <img className='w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Veritatis rem recusandae possimus excepturi.</p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={20} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='w-[370px] h-[350px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer'>
          <img className='w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Veritatis rem recusandae possimus excepturi.</p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={20} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='w-[370px] h-[350px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer'>
          <img className='w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Veritatis rem recusandae possimus excepturi.</p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={20} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='w-[370px] h-[350px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer'>
          <img className='w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Veritatis rem recusandae possimus excepturi.</p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={20} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='w-[370px] h-[350px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer'>
          <img className='w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Veritatis rem recusandae possimus excepturi.</p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={20} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='w-[370px] h-[350px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer'>
          <img className='w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Veritatis rem recusandae possimus excepturi.</p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={20} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='w-[370px] h-[350px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer'>
          <img className='w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Veritatis rem recusandae possimus excepturi.</p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={20} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
 
      </div>
    </div>
  )
}
