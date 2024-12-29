// import React from 'react'
// import Image from 'next/image'
// import { FaArrowRightLong } from "react-icons/fa6";

// export default function Hero() {
//     const HeroImg = '/hero-img.png'

//   return (
//     <div className='bg-gray-200 h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center pr-24'>
//         <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
//             <div className='col-span-2'>
//                 <h1 className='mb-5'>WELCOME TO CHAIRY</h1>
//                 <h1
//                 className='text-[65px] mb-5 font-bold text-[#02073e]
//                 leading-[2.4rem] md:leading-[4rem]'>Best Furniture Collection For Your Interior.</h1>
//                 <div
//                 className='flex items-center space-x-4 md:space-x-6 mt-5 pt-[14px]'>
//                     <button className="bg-[#029FAE] text-white px-4 py-2 rounded hover:bg-red-100 flex items-center space-x-2 mr-24">
//                         {/* Cart Icon */}
//           <span>Shop Now</span> {/* Text */}
//           <FaArrowRightLong className="text-xl text-white" />
//         </button>
//                 </div>
//             </div>
//             <div
//             className='col-span-3 hidden sm:block'>
//                 <Image 
//                 src={HeroImg}
//                 alt='Hero'
//                 width={400}
//                 height={500}
//                 />
//             </div>
//         </div>
//     </div>
//   )
// }



import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  const HeroImg = '/hero-img.png';

  return (
    <div className='bg-gray-200 ml-28 mr-28 rounded-b-3xl'>
    <div className=" h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[90%] max-w-[1200px] mx-auto">
        {/* Text Section */}
        <div className="col-span-2 text-center lg:text-left">
          <h1 className="text-gray-500 text-lg mb-2">WELCOME TO CHAIRY</h1>
          <h1 className="text-[40px] md:text-[65px] mb-5 font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
            Best Furniture Collection For Your Interior.
          </h1>
          <div className="flex justify-center lg:justify-start items-center space-x-4 md:space-x-6 mt-5 pt-[14px]">
            <button className="bg-[#029FAE] text-white px-6 py-3 rounded hover:bg-[#027d87] flex items-center space-x-2">
              <span>Shop Now</span>
              <FaArrowRightLong className="text-xl text-white" />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-3 flex justify-center">
          <Image
            src={HeroImg}
            alt="Hero"
            width={400}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
