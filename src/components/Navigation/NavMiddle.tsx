import React from 'react';
import Image from 'next/image';
import { FiShoppingCart } from "react-icons/fi";
import { TbCircleNumber2Filled } from "react-icons/tb";
import Link from 'next/link';

export default function NavMiddle() {
  const Logo = '/Logo_Icon.png';

  return (
    <div className="bg-gray-200 h-[10vh] flex items-center justify-between px-4 mx-auto">
      {/* Left Section: Images and Heading */}
      <div className="flex items-center space-x-2 ml-24">
        <div className=''>
          <Image
            src={Logo}
            alt="logo"
            width={35}
            height={35}
            className=""
          />
        </div>
        <h1 className="text-blue-950 font-medium text-[30px]">Comforty</h1>
      </div>

      {/* Right Section: Button */}
      <div>
        <Link href={'/CartPage/'}>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-400 flex items-center space-x-2 mr-24">
          <FiShoppingCart className="text-lg" /> {/* Cart Icon */}
          <span>Cart</span> {/* Text */}
          <TbCircleNumber2Filled className="text-xl text-[#029FAE]" />
        </button>
        </Link>
      </div>
    </div>
  );
}



// import React from 'react';
// import Image from 'next/image';
// import { FiShoppingCart } from "react-icons/fi";
// import { TbCircleNumber2Filled } from "react-icons/tb";

// export default function NavMiddle() {
//   const Logo = '/Logo_Icon.png';

//   return (
//     <div className="bg-gray-200 h-auto py-2 flex flex-col sm:flex-row items-center justify-between px-4 space-y-2 sm:space-y-0">
//       <div className="flex items-center space-x-2">
//         <Image src={Logo} alt="logo" width={35} height={35} />
//         <h1 className="text-blue-950 font-medium text-[24px] sm:text-[30px]">Comforty</h1>
//       </div>
//       <button className="bg-white text-black px-4 py-2 rounded hover:bg-red-100 flex items-center space-x-2">
//         <FiShoppingCart className="text-lg" />
//         <span>Cart</span>
//         <TbCircleNumber2Filled className="text-xl text-[#029FAE]" />
//       </button>
//     </div>
//   );
// }
