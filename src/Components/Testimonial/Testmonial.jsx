import React from 'react';
import { Link } from 'react-router-dom'
import { Star, Truck, Shield, Clock, ArrowRight, StarIcon, Mail } from 'lucide-react';

function Testimonial() {
  return (
    <div className="  w-full   ">
      {/* Your existing sections (navbar, slider, features, why choose us, latest collections) */}

      {/* Testimonials & Newsletter Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Testimonials */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our happy customers have to say about their experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/Testimonial/face_1_optimized_250.jpg"
                  alt="Customer"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The quality of these shoes is outstanding! I've never felt more comfortable running, and the customer service was exceptional."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/Testimonial/Img_1_optimized_250.jpg"
                  alt="Customer"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">Michael Chen</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Fast delivery and the shoes fit perfectly! The online size guide was very helpful. Will definitely shop here again."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/Testimonial/face_2_1_optimized_250.jpg"
                  alt="Customer"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">Emma Davis</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Love the variety of styles available. Found the perfect pair for my wedding day. The quality is absolutely worth the price!"
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-black text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1549298916-f52d724204b4')] bg-cover bg-center"></div>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Get Exclusive Offers</h3>
              <p className="text-gray-300 mb-8">
                Subscribe to our newsletter and receive exclusive offers, early access to new collections, and style tips from our experts.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                {/* <input
                  type="number"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                /> */}
                <Link to='/contact'>
                  <button
                    type="submit"
                    className="ml-28 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
                  >
                    Subscribe <Mail className="w-4 h-4" />
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;