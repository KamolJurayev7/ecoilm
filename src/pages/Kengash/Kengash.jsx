import React from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
{/* <img src="./assets/img/Rectangle 7 (1).png" alt="kengash_img" /> 1*/ }
{/* <img
className="shadow-xl"
src=""
alt=""
/>2 */}
{/* <img
              className="shadow-xl"
              src=""
              alt=""
            />4 */}
// <img
//   className="shadow-xl"
//   src=""
//   alt=""
// />3
//   <img
//   className="shadow-xl"
//   src=".png"
//   alt=""
// />5
export default function Kengash() {
  return (
    <div className="max-w-[1340px] h-auto mx-[100px] py-5">
      <div className="border-b-2 border-b-[#58c77fe3]">
        <h1 className="lg:text-[60px]  md:text-[25px] sm:[20px] font-bold text-[#58c77fe3]">Ilmiy kengash</h1>
      </div>
      <div className='my-3 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-8  sm:gap-2'>
        <div className='lg:w-[550px] lg:h-[465px] md:w-[480px] md:h-[450px]  rounded-md rounded-tr-md bg-white  shadow-2xl hover:shadow-xl cursor-pointer'>
          <img className='w-full rounded-tl-md rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-semibold'>
            Texnika fanlari boʼyicha falsafa doktori (PhD) ilmiy darajasi
            – PhD.18/30.11.2022.T.153.01 raqamli
            ixtisosligini beruvchi ilmiy kengash faoliyati yoʼlga qoʼyildi.
          </p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={25} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[80px] h-[40px] text-[18px] text-center pt-2 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='lg:w-[550px] lg:h-[465px] md:w-[480px] md:h-[450px]  rounded-md rounded-tr-md bg-white  shadow-2xl hover:shadow-xl cursor-pointer'>
          <img className='w-full rounded-tl-md rounded-tr-md-md rounded-tr-md' src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 2 (1).png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-semibold'>
            Texnika fanlari boʼyicha falsafa doktori (PhD) ilmiy darajasi 
            – PhD.18/30.11.2022.T.153.01 raqamli
            ixtisosligini beruvchi ilmiy kengash faoliyati yoʼlga qoʼyildi.
          </p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={25} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[80px] h-[40px] text-[18px] text-center pt-2 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='lg:w-[550px] lg:h-[465px] md:w-[480px] md:h-[450px]  rounded-md rounded-tr-md bg-white  shadow-2xl hover:shadow-xl cursor-pointer'>
          <img className='w-full rounded-tl-md rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-semibold'>
            Texnika fanlari boʼyicha falsafa doktori (PhD) ilmiy darajasi
            – PhD.18/30.11.2022.T.153.01 raqamli
            ixtisosligini beruvchi ilmiy kengash faoliyati yoʼlga qoʼyildi.
          </p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={25} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[80px] h-[40px] text-[18px] text-center pt-2 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='lg:w-[550px] lg:h-[465px] md:w-[480px] md:h-[450px]  rounded-md rounded-tr-md bg-white  shadow-2xl hover:shadow-xl cursor-pointer'>
          <img className='w-full rounded-tl-md rounded-tr-md-md rounded-tr-md' src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 2 (1).png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-semibold'>
            Texnika fanlari boʼyicha falsafa doktori (PhD) ilmiy darajasi 
            – PhD.18/30.11.2022.T.153.01 raqamli
            ixtisosligini beruvchi ilmiy kengash faoliyati yoʼlga qoʼyildi.
          </p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={25} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[80px] h-[40px] text-[18px] text-center pt-2 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='lg:w-[550px] lg:h-[465px] md:w-[480px] md:h-[450px]  rounded-md rounded-tr-md bg-white  shadow-2xl hover:shadow-xl cursor-pointer'>
          <img className='w-full rounded-tl-md rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-semibold'>
            Texnika fanlari boʼyicha falsafa doktori (PhD) ilmiy darajasi
            – PhD.18/30.11.2022.T.153.01 raqamli
            ixtisosligini beruvchi ilmiy kengash faoliyati yoʼlga qoʼyildi.
          </p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={25} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[80px] h-[40px] text-[18px] text-center pt-2 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='lg:w-[550px] lg:h-[465px] md:w-[480px] md:h-[450px]  rounded-md rounded-tr-md bg-white  shadow-2xl hover:shadow-xl cursor-pointer'>
          <img className='w-full rounded-tl-md rounded-tr-md-md rounded-tr-md' src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 2 (1).png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-semibold'>
            Texnika fanlari boʼyicha falsafa doktori (PhD) ilmiy darajasi 
            – PhD.18/30.11.2022.T.153.01 raqamli
            ixtisosligini beruvchi ilmiy kengash faoliyati yoʼlga qoʼyildi.
          </p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={25} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[80px] h-[40px] text-[18px] text-center pt-2 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='lg:w-[550px] lg:h-[465px] md:w-[480px] md:h-[450px]  rounded-md rounded-tr-md bg-white  shadow-2xl hover:shadow-xl cursor-pointer'>
          <img className='w-full rounded-tl-md rounded-tr-md-md rounded-tr-md' src="./assets/img/group.png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-semibold'>
            Texnika fanlari boʼyicha falsafa doktori (PhD) ilmiy darajasi
            – PhD.18/30.11.2022.T.153.01 raqamli
            ixtisosligini beruvchi ilmiy kengash faoliyati yoʼlga qoʼyildi.
          </p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={25} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[80px] h-[40px] text-[18px] text-center pt-2 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
        <div className='lg:w-[550px] lg:h-[465px] md:w-[480px] md:h-[450px]  rounded-md rounded-tr-md bg-white  shadow-2xl hover:shadow-xl cursor-pointer'>
          <img className='w-full rounded-tl-md rounded-tr-md-md rounded-tr-md' src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 2 (1).png" alt="assets" />
          <p className='text-[17px] pt-2 pl-3 font-semibold'>
            Texnika fanlari boʼyicha falsafa doktori (PhD) ilmiy darajasi 
            – PhD.18/30.11.2022.T.153.01 raqamli
            ixtisosligini beruvchi ilmiy kengash faoliyati yoʼlga qoʼyildi.
          </p>
          <div className='flex flex-row px-3 items-center justify-between pt-5'>
            <div className='flex flex-row items-center'><IoTimeOutline className='text-gray-500' size={25} />
              <p className='text-gray-500 font-semibold pl-2'>21.11.2024</p></div>
            <p className='bg-[#00df9a] text-white rounded-lg w-[80px] h-[40px] text-[18px] text-center pt-2 hover:scale-105 duration-300'><Link to={'/news'}>Batafsil</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
