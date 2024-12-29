// components/ShoppingBag.js
import Image from 'next/image';
import { GoTrash } from "react-icons/go";
import { GoHeart } from "react-icons/go";

const CartPage = () => {
  const products = [
    {
      id: 1,
      name: 'Library Stool Chair',
      price: '$99',
      image: '/Products/P1.png',
      color: 'Ashen Slate / Cobalt Bliss',
      size: 'L',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Library Stool Chair',
      price: '$99',
      image: '/Products/P4.png',
      color: 'Ashen Slate / Cobalt Bliss',
      size: 'L',
      quantity: 1,
    },
  ];

  const subtotal = products.reduce(
    (total, product) => total + parseFloat(product.price.slice(1)),
    0
  );

  return (
    <div className='ml-28 mr-28 mt-10'>
    <div className="bg-white py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bag Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Bag</h2>
          <div className="space-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-start gap-4 border-b pb-4"
              >
                <div className="w-36 h-36 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-md font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-md text-gray-500 mt-5 mb-3">
                    {product.color} <br />
                    Size: {product.size} Quantity: {product.quantity}
                  </p>
                  <div className='flex gap-6 ml-4'>
                  <GoHeart className='text-2xl my-6 hover:text-red-600' />
                  <GoTrash className='text-2xl my-6 hover:text-gray-500' />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                <p className="text-sm font-medium text-gray-800 mt-2">
                    MRP: {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-50 p-6 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Summary</h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
          </div>
          <div className="border-t mt-4 pt-4 flex justify-between text-sm font-medium text-gray-800">
            <p>Total</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <button className="w-full h-[8vh] mt-6 bg-[#029FAE] rounded-full text-white py-2 px-4 hover:bg-teal-700">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartPage;
