import './index.css'
import AllComponents from './Components/AllComponents/AllComponents'
import ContactUs from './Components/Contactus/ContactUs'
import AboutUs from './Components/AboutUs/AboutUs'
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      {/* <AllComponents /> */}
      {/* ContactUs Route */}
      <Routes>
      <Route path="/" element={<AllComponents />} />
        <Route path="/contact" element={< ContactUs/>} />
        <Route path = "/about" element= {<AboutUs/>}/>
      </Routes>
    </>
  )
}

export default App
