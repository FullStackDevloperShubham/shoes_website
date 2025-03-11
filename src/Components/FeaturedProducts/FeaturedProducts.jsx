import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: "$299.99",
    img: "/FeatureProducts/Shoe_1.jpg",
    tag: "New"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$199.99",
    img: "/FeatureProducts/Shoe_2.jpg",
    tag: "Sale"
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: "$149.99",
    img: "/FeatureProducts/Shoe_3.jpg"
  },
  {
    id: 4,
    name: "Wireless Speaker",
    price: "$149.99",
    img: "/FeatureProducts/Shoe_4.jpg"
  },
  {
    id: 5,
    name: "Wireless Speaker",
    price: "$149.99",
    img: "/FeatureProducts/Shoe_5.jpg"
  },
  {
    id: 6,
    name: "Wireless Speaker",
    price: "$149.99",
    img: "/FeatureProducts/Shoe_6.jpg"
  },
  {
    id: 7,
    name: "Wireless Speaker",
    price: "$149.99",
    img: "/FeatureProducts/Shoe_7.jpg"
  },
  {
    id: 8,
    name: "Wireless Speaker",
    price: "$149.99",
    img: "/FeatureProducts/Shoe_8.jpg"
  },
];

// Animation variants
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const directions = ['left', 'right', 'up', 'down'];

const cardVariants = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
    y: direction === 'up' ? -50 : direction === 'down' ? 50 : 0
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
});

function App() {
  return (
    <section className="static py-6 sm:py-10   w-full cursor-pointer">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mt-4 sm:mt-[2rem] md:mt-[2rem] lg:mt-[1rem] xl:mt-0 mb-4 sm:mb-6 px-4">
        Featured Products
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full mx-auto px-4 sm:px-6 lg:px-8"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product, index) => {
          const randomDirection = directions[index % directions.length];
          return (
            <motion.div
              key={product.id}
              variants={cardVariants(randomDirection)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white shadow-lg rounded-lg p-3 sm:p-4 transition flex flex-col h-full"
            >
              <div className="relative">
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.tag}
                  </span>
                )}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mt-2 sm:mt-3">{product.name}</h3>
              <p className="text-gray-500 text-sm sm:text-base">{product.price}</p>
              <div className="flex-grow"></div>
             <Link to='/contact'>
             <button className="mt-2 sm:mt-3 w-full bg-blue-600 text-white py-1.5 sm:py-2 rounded-lg hover:bg-blue-700 text-sm sm:text-base">
                Buy Now
              </button>
             </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default App;