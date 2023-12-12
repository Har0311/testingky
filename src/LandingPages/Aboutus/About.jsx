import React from "react";
import People from "./People";
import Event from "./Event";
import Counter from "./Counter";
// import Building from "../Pages/Building";

const AboutUs = () => {
  return (
    <>
      <main className="w-full h-screen relative">
        <div className="container h-auto m-auto flex flex-col items-center justify-center max-w-[1080px] md:w-[80%] w-[80%] gap-8">
          <div>
            <h1 className="text-6xl font-bold text-white uppercase ">
              About Us
            </h1>
          </div>
          <div className="w-auto">
            <p className="flex text-start text-white leading-1 tracking-wider text-[16px] md:text-xl font-roboto">
              Kashiyatra, the annual socio-cultural festival of IIT(BHU)
              Varanasi is a three day fiesta, aimed towards mesmerizing everyone
              with enchanting literary, musical and artistic events. It is the
              largest cultural festival of northern India. IIT(BHU) rests within
              Asia's biggest residential university, BHU in the holy city of
              Varanasi. Varanasi, the eternal city, houses plethora of
              traditions and has an ecstatic blend of cultures of myriad races.
              IIT(BHU) Varanasi has been nationally acclaimed for imparting
              technical knowledge in diverse fields and it has recently
              concluded its centenary celebrations.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 text-white md:gap-10 lg:gap-16">
            <div className="flex flex-col p-5 justify-center items-center md:flex-1">
              <div className="mb-4 md:w-[150px] lg:w-[200px]">
                <People />
              </div>
              <p id="counter" className="text-5xl font-bold">
                <Counter targetNumber={70000} />
              </p>
              <p className="text-3xl">Footfall</p>
            </div>
            <div className="flex flex-col p-5 justify-center items-center md:flex-1">
              <div className="mb-4 md:w-[150px] lg:w-[200px]">
                <Event />
              </div>
              <p id="counter" className="text-5xl font-bold">
                <Counter targetNumber={60} />
              </p>
              <p className="text-3xl ">Footfall</p>
            </div>
            <div className="flex flex-col p-5 justify-center items-center md:flex-1">
              <div className="mb-4 md:w-[150px] lg:w-[200px]">
                <Event />
              </div>
              <p id="counter" className="text-5xl font-bold">
                <Counter targetNumber={30} />
              </p>
              <p className="text-3xl ">Footfall</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
