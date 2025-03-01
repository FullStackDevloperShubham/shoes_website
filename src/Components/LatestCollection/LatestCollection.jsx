import React from 'react';
import { Star, Truck, Shield, Clock, ArrowRight } from 'lucide-react';

function LatestCollection() {
  return (
    <div className=" w-screen">
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
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2">
            <img
              src="/LatestCollection/Shoe_1_JPEG_optimized_500.jpg"
              loading='lazy'
              alt="Sport Collection"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Sport Collection</h3>
              <p className="text-gray-200 mb-4">Performance meets style in our latest sport collection</p>
              <button className="bg-white text-black px-6 py-2 rounded-full flex items-center justify-center gap-2 w-fit group-hover:bg-black group-hover:text-white transition-colors">
                Shop Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Collection Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2">
            <img
              src="/LatestCollection/Shoe_2_JPEG_optimized_500.jpg"
              loading='lazy'
              alt="Casual Collection"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Casual Collection</h3>
              <p className="text-gray-200 mb-4">Everyday comfort with a touch of elegance</p>
              <button className="bg-white text-black px-6 py-2 rounded-full flex items-center justify-center gap-2 w-fit group-hover:bg-black group-hover:text-white transition-colors">
                Shop Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Collection Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2">
            <img
              src="/LatestCollection/Shoe_3_JPEG_optimized_500.jpg"
              loading='lazy'
              alt="Limited Edition"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Limited Edition</h3>
              <p className="text-gray-200 mb-4">Exclusive designs for the fashion-forward</p>
              <button className="bg-white text-black px-6 py-2 rounded-full flex items-center justify-center gap-2 w-fit group-hover:bg-black group-hover:text-white transition-colors">
                Shop Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
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
        </div>

      </section>
    </div>
  );
}

export default LatestCollection;