import Footer from "./components/Footer/Footer";
import FrontPage from "./components/FrontPage/FrontPage";
import Navbar from "./components/Navbar/Navbar";
import BrowniePoint from "./pages/BrowniePoints/BrowniePoint";
import Contactus from "./pages/Contactus/Contactus";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import PageOne from "./pages/PageOne/PageOne";
import Responsibilty from "./pages/Responsibilites/Responsibility";
import WhatisCA from "./pages/WhatisCA/WhatisCA";
import WhyisCA from "./pages/WhyisCA/WhyisCA";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Toolika from "./EventsPages/Toolika/toolika";
import Navi from "./EventsPages/navigate/navi";
import EveLogin from "./EventsPages/EventLoginform/EveLogin";
import EveRegister from "./EventsPages/EventRegisterPage/EveRegister";
import EveRegistrationForm from "./EventsPages/EventsRegisterationform/eventsregisterform";
import LandingPage from "./LandingPages/FrontPage/frontlandpage";
import AboutUs from "./LandingPages/Aboutus/About";
import Samwaad from "./EventsPages/Samwaad/samwaad";
import Natraj from "./EventsPages/natraj";
import Abhinay from "./EventsPages/abhinay";
import Mirage from "./EventsPages/Mirage";
import Enquizta from "./EventsPages/enquizta";
import Bandish from "./EventsPages/bandish";
import Crosswindz from "./EventsPages/crosswindz";
import Captureit from "./EventsPages/captureit";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
              {/* <AboutUs /> */}
              {/* <Natraj /> */}
              {/* <Samwaad /> */}
              {/* {<Toolika />} */}
              {/* <LandingPage />
              <AboutUs /> */}

              {/* <FrontPage />
              <PageOne />
              <WhatisCA />
              <WhyisCA />
              <Responsibilty />
              <BrowniePoint />
              <Contactus /> */}
              {/* <Footer /> */}
            </>
          }
        />
        <Route exact path="/landing" element={<LandingPage />} />
        {/* <Route exact path="/toolika" element={<Toolika />} />
        <Route exact path="/samwaad" element={<Samwaad />} />
        <Route exact path="/abhinay" element={<Abhinay />} />
        <Route exact path="/mirage" element={<Mirage />} />
        <Route exact path="/captureit" element={<Captureit />} />
        <Route exact path="/crosswindz" element={<Crosswindz />} />
        <Route exact path="/natraj" element={<Natraj />} />
        <Route exact path="/enquizta" element={<Enquizta />} />
        <Route exact path="/bandish" element={<Bandish />} />

        <Route exact path="/eventslogin" element={<EveLogin />} />
        <Route exact path="/eventsregister" element={<EveRegister />} /> */}
        <Route
          exact
          path="/eventsregisterationform"
          element={<EveRegistrationForm />}
        />

        {/* 
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/pageone" element={<PageOne />} />
          <Route exact path="/ca-register" element={<RegistrationForm />} /> */}
      </Routes>
    </>
  );
}

export default App;
