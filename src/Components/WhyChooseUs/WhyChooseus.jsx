import React from 'react';
import { Shield, Truck, RefreshCcw, Clock, Users, Star } from 'lucide-react';

function WhyChooseUs() {
  return (
    <div className=" bg-slate-200">
      {/* Your existing navbar and slider code here */}

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 ">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're committed to providing the best shopping experience with premium quality shoes and exceptional service
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 text-center">100% authentic products with manufacturer warranty</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-center">Free shipping on orders over $100</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <RefreshCcw className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-center">30-day hassle-free return policy</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-3 rounded-full mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-center">Round-the-clock customer service</p>
            </div>
          </div>

          {/* Statistics Section */}
          {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center text-center">
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
          </div> */}

        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;