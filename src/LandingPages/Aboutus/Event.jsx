import React from "react";
import event from "../../assets/Aboutus/Vector_3.png";
import start from "../../assets/Aboutus/Vector_4.png";
import dots from "../../assets/Aboutus/Vector_5.png";

const Event = () => {
  return (
    <>
      <div className="relative top-6 h-[200px] w-[200px]">
        <img src={event} alt="" className="w-full" />

        {/* star */}
        <img src={start} alt="" className="absolute -top-4 left-[48%]" />

        {/* leftmost */}
        <img src={dots} alt="" className="absolute -top-2 left-[30px]" />

        {/* rightmost */}
        <img src={dots} alt="" className="absolute top-[20px] left-[42%]" />

        {/* make the square */}
        <img src={dots} alt="" className="absolute -top-[7%] left-[32%]" />
        <img src={dots} alt="" className="absolute -top-[10%] left-[35%]" />
        <img src={dots} alt="" className="absolute -top-[7%] left-[38%]" />
        <img src={dots} alt="" className="absolute -top-[4%] left-[35%]" />

        {/* rightmost side of star */}
        <img src={dots} alt="" className="absolute -top-3 left-[74%]" />
      </div>
    </>
  );
};

export default Event;
