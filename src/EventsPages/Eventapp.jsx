import { Routes, Route } from "react-router-dom";
import Toolika from "./EventsPages/Toolika/toolika";
import EveLogin from "./EventsPages/EventLoginform/EveLogin";
import EveRegister from "./EventsPages/EventRegisterPage/EveRegister";
import EveRegistrationForm from "./EventsPages/EventsRegisterationform/eventsregisterform";
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
      <Routes>
        <Route
          exact
          path="/events"
          element={
            <>
              <Toolika />
            </>
          }
        />
        <Route exact path="/toolika" element={<Toolika />} />
        <Route exact path="/samwaad" element={<Samwaad />} />
        <Route exact path="/abhinay" element={<Abhinay />} />
        <Route exact path="/mirage" element={<Mirage />} />
        <Route exact path="/captureit" element={<Captureit />} />
        <Route exact path="/crosswindz" element={<Crosswindz />} />
        <Route exact path="/natraj" element={<Natraj />} />
        <Route exact path="/enquizta" element={<Enquizta />} />
        <Route exact path="/bandish" element={<Bandish />} />

        <Route exact path="/eventslogin" element={<EveLogin />} />
        <Route exact path="/eventsregister" element={<EveRegister />} />
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
