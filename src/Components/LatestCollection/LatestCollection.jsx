import React from 'react';
import { Star, Truck, Shield, Clock, ArrowRight } from 'lucide-react';

const NFTCard = ({ imageSrc, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2">
      <img
        src={imageSrc}
        loading="lazy"
        alt={title}
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        <button className="bg-white text-black px-6 py-2 rounded-full flex items-center justify-center gap-2 w-fit group-hover:bg-black group-hover:text-white transition-colors">
          Shop Now <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

function LatestCollection() {
  return (
    <div className="w-screen">
      {/* Latest Collections Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our newest arrivals featuring cutting-edge designs and unmatched comfort.
            Stay ahead of the trends with our exclusive collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Collection Card 1 */}
          <NFTCard
            imageSrc="/LatestCollection/Shoe_1_JPEG_optimized_500.jpg"
            title="Sport Collection"
            description="Performance meets style in our latest sport collection"
          />

          {/* Collection Card 2 */}
          <NFTCard
            imageSrc="/LatestCollection/Shoe_2_JPEG_optimized_500.jpg"
            title="Casual Collection"
            description="Everyday comfort with a touch of elegance"
          />

          {/* Collection Card 3 */}
          <NFTCard
            imageSrc="/LatestCollection/Shoe_3_JPEG_optimized_500.jpg"
            title="Limited Edition"
            description="Exclusive designs for the fashion-forward"
          />
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center text-center">
          <div>
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">15k+</h4>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div>
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Shield className="w-8 h-8 text-green-500" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">100%</h4>
            <p className="text-gray-600">Secure Payment</p>
          </div>

          <div>
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Clock className="w-8 h-8 text-purple-500" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">24/7</h4>
            <p className="text-gray-600">Support Available</p>
          </div>

          <div>
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Truck className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">Free Shipping</h4>
            <p className="text-gray-600">On all orders</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestCollection;