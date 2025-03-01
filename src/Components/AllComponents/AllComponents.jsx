import react from 'react';
// import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Carousel from '../Carousel/Carousel'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import WhyChooseUs from '../WhyChooseUs/WhyChooseus'
import LatestCollection from '../LatestCollection/LatestCollection'
// const LatestCollection = react.lazy(() => import('../LatestCollection/LatestCollection'))
import Testimonial from '../Testimonial/Testmonial'
import MapLocation from '../MapLocation/MapLocation';
const AllComponents = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <FeaturedProducts />
            <LatestCollection />
            <Testimonial />
            <WhyChooseUs />
            <MapLocation />
        </>
    )
}

export default AllComponents;