import Navbar from '../Navbar/Navbar'
import {
    Users,
    Target,
    Clock,
    Award,
    MapPin,
    Mail,
    Phone,
    Github,
    Linkedin,
    Twitter,
    ChevronRight,
    Building,
    Heart,
} from "lucide-react"

const AboutUs = () => {
    return (
        <>
        {/* navigation bar */}
            <Navbar />

            {/* AboutUs Content */}

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-blue-600 bg-white py-20 px-4 sm:px-6 lg:px-8">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="relative max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                            About Our Shop
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-white opacity-90">
                            We're on a mission to transform the digital landscape with innovative solutions that empower businesses and
                            individuals alike.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                            <div className="mb-10 lg:mb-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mb-5">
                                    <Target size={24} />
                                </div>
                                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
                                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                                    We strive to create innovative digital solutions that solve real-world problems and make a positive
                                    impact on society. Our goal is to empower businesses with the tools they need to thrive in the digital
                                    age.
                                </p>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <ChevronRight className="h-5 w-5 text-indigo-600" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-base font-medium text-gray-500">Delivering exceptional value to our clients</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <ChevronRight className="h-5 w-5 text-indigo-600" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-base font-medium text-gray-500">Fostering innovation and creative thinking</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <ChevronRight className="h-5 w-5 text-indigo-600" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-base font-medium text-gray-500">Building sustainable and scalable solutions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-w-5 aspect-h-3 rounded-lg shadow-xl overflow-hidden bg-gray-100">
                                    <img
                                        src="/placeholder.svg?height=400&width=600"
                                        alt="Team collaboration"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="flex items-center justify-center">
                            <Users className="h-8 w-8 text-indigo-600 mr-3" />
                            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
                        </div>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            Our diverse team of talented individuals brings a wealth of experience and passion to every project.
                        </p>

                        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Team Member 1 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    className="h-48 w-full object-cover"
                                    src="/placeholder.svg?height=200&width=300"
                                    alt="Sarah Johnson"
                                />
                                <div className="p-6">
                                    <h3 className="text-lg font-medium text-gray-900">Sarah Johnson</h3>
                                    <p className="text-indigo-600 mb-4">CEO & Founder</p>
                                    <p className="text-gray-500 mb-4">
                                        With over 15 years of experience in tech leadership, Sarah drives our vision and strategy.
                                    </p>
                                    <div className="flex space-x-4 justify-center">
                                        <a href="#" className="text-gray-400 hover:text-indigo-600">
                                            <Twitter size={20} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-indigo-600">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-indigo-600">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Team Member 2 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    className="h-48 w-full object-cover"
                                    src="/placeholder.svg?height=200&width=300"
                                    alt="Michael Chen"
                                />
                                <div className="p-6">
                                    <h3 className="text-lg font-medium text-gray-900">Michael Chen</h3>
                                    <p className="text-indigo-600 mb-4">CTO</p>
                                    <p className="text-gray-500 mb-4">
                                        Michael leads our technical strategy and ensures we stay at the cutting edge of technology.
                                    </p>
                                    <div className="flex space-x-4 justify-center">
                                        <a href="#" className="text-gray-400 hover:text-indigo-600">
                                            <Twitter size={20} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-indigo-600">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-indigo-600">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Team Member 3 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img className="h-48 w-full object-cover" src="/placeholder.svg?height=200&width=300" alt="Aisha Patel" />
                                <div className="p-6">
                                    <h3 className="text-lg font-medium text-gray-900">Aisha Patel</h3>
                                    <p className="text-indigo-600 mb-4">Head of Design</p>
                                    <p className="text-gray-500 mb-4">
                                        Aisha brings creativity and user-centered design principles to all our products.
                                    </p>
                                    <div className="flex space-x-4 justify-center">
                                        <a href="#" className="text-gray-400 hover:text-indigo-600">
                                            <Twitter size={20} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-indigo-600">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-indigo-600">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History Timeline Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center">
                                <Clock className="h-8 w-8 text-indigo-600 mr-3" />
                                <h2 className="text-3xl font-extrabold text-gray-900">Our Journey</h2>
                            </div>
                            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                                From humble beginnings to industry leadership, our story is one of innovation and growth.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

                            {/* Timeline items */}
                            <div className="relative z-10">
                                {/* 2015 */}
                                <div className="mb-16 flex items-center">
                                    <div className="flex flex-col items-center w-1/2 pr-8 text-right">
                                        <h3 className="text-xl font-bold text-indigo-600">2015</h3>
                                        <h4 className="text-lg font-semibold text-gray-900 mt-1">Company Founded</h4>
                                        <p className="text-gray-500 mt-2">
                                            Started in a small garage with just three team members and a vision to change the industry.
                                        </p>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                        <div className="h-8 w-8 rounded-full border-4 border-indigo-600 bg-white"></div>
                                    </div>
                                    <div className="w-1/2 pl-8"></div>
                                </div>

                                {/* 2017 */}
                                <div className="mb-16 flex items-center">
                                    <div className="w-1/2 pr-8"></div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                        <div className="h-8 w-8 rounded-full border-4 border-indigo-600 bg-white"></div>
                                    </div>
                                    <div className="flex flex-col items-center w-1/2 pl-8 text-left">
                                        <h3 className="text-xl font-bold text-indigo-600">2017</h3>
                                        <h4 className="text-lg font-semibold text-gray-900 mt-1">First Major Client</h4>
                                        <p className="text-gray-500 mt-2">
                                            Secured our first enterprise client and expanded the team to 15 talented professionals.
                                        </p>
                                    </div>
                                </div>

                                {/* 2019 */}
                                <div className="mb-16 flex items-center">
                                    <div className="flex flex-col items-center w-1/2 pr-8 text-right">
                                        <h3 className="text-xl font-bold text-indigo-600">2019</h3>
                                        <h4 className="text-lg font-semibold text-gray-900 mt-1">New Headquarters</h4>
                                        <p className="text-gray-500 mt-2">
                                            Moved to our current headquarters and launched our flagship product to critical acclaim.
                                        </p>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                        <div className="h-8 w-8 rounded-full border-4 border-indigo-600 bg-white"></div>
                                    </div>
                                    <div className="w-1/2 pl-8"></div>
                                </div>

                                {/* 2022 */}
                                <div className="flex items-center">
                                    <div className="w-1/2 pr-8"></div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                        <div className="h-8 w-8 rounded-full border-4 border-indigo-600 bg-white"></div>
                                    </div>
                                    <div className="flex flex-col items-center w-1/2 pl-8 text-left">
                                        <h3 className="text-xl font-bold text-indigo-600">2022</h3>
                                        <h4 className="text-lg font-semibold text-gray-900 mt-1">Global Expansion</h4>
                                        <p className="text-gray-500 mt-2">
                                            Opened offices in three new countries and grew our client base to over 500 businesses worldwide.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center">
                                <Award className="h-8 w-8 text-indigo-600 mr-3" />
                                <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
                            </div>
                            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                                These principles guide everything we do and define who we are as a company.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Value 1 */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mb-5 mx-auto">
                                    <Heart size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Customer First</h3>
                                <p className="text-gray-500 text-center">
                                    We prioritize our customers' needs and satisfaction above all else, building long-term relationships
                                    based on trust and value.
                                </p>
                            </div>

                            {/* Value 2 */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mb-5 mx-auto">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Collaborative Innovation</h3>
                                <p className="text-gray-500 text-center">
                                    We believe the best ideas come from diverse teams working together, challenging each other to think
                                    differently.
                                </p>
                            </div>

                            {/* Value 3 */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mb-5 mx-auto">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Excellence in Execution</h3>
                                <p className="text-gray-500 text-center">
                                    We hold ourselves to the highest standards, delivering quality work that exceeds expectations every
                                    time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div>
                                <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    We'd love to hear from you. Reach out to us with any questions, feedback, or inquiries.
                                </p>

                                <div className="mt-8 space-y-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <MapPin className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <div className="ml-3 text-base text-gray-500">
                                            <p>Balaji Footwear</p>
                                            <p className="mt-1">At post Laul &#44; Pin&#58;413208  </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <Phone className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <div className="ml-3 text-base text-gray-500">
                                            <p>&#43;91&nbsp;9356003196</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <Mail className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <div className="ml-3 text-base text-gray-500">
                                            <p>info@yourcompany.com</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="mt-8 flex space-x-6">
                                    <a href="#" className="text-gray-400 hover:text-indigo-600">
                                        <Twitter size={24} />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-indigo-600">
                                        <Linkedin size={24} />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-indigo-600">
                                        <Github size={24} />
                                    </a>
                                </div> */}
                            </div>

                            <div className="mt-12 lg:mt-0">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="px-6 py-6 sm:px-10 sm:py-10">
                                        <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
                                        <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                            <div>
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={4}
                                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                ></textarea>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <button
                                                    type="submit"
                                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                {/* <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center mb-4">
                                <Building className="h-8 w-8 text-indigo-400 mr-2" />
                                <span className="text-xl font-bold">Your Company</span>
                            </div>
                            <p className="text-gray-300 mb-4 max-w-md">
                                Transforming the digital landscape with innovative solutions that empower businesses and individuals
                                alike.
                            </p>
                            <div className="flex space-x-6">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        News
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Legal</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        Cookie Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-700">
                        <p className="text-gray-400 text-sm text-center">
                            &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer> */}
            </div>
        </>
    )
}

export default AboutUs;