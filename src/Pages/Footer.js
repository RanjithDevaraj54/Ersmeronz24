import React from "react";
import img from "../image/3d-illustration-teenager-with-funny-face-glasses.jpg";
const Footer = () => {
  return (
    <div
      className=" relative max-w-[100vw] h-[100vh] bg-black px-40 max-sm:px-10 flex flex-col items-center justify-center"
    >
      <div className="  flex items-center justify-center flex-col gap-5 h-[35vw]">
        <div className=" relative">
          <div className=" absolute w-full h-full bg-primary rounded-full"></div>
          <img
            src={img}
            className="relative inset-y-[1.5px] inset-x-[1.5px] rounded-full overflow-hidden w-32"
          />
        </div>
        <div className="  text-center -mt-3">
        </div>
        <p className="  text text-4xl text-center max-sm:text-2xl px-10">Let's have a chance to <br></br> Work Together !</p>
        <a href="mailto:sanjai.me21@bitsathy.ac.in" className=" bg-primary p-4 mt-2  ring-4 ring-primary/20 px-10 shadow-xl shadow-primary/50 rounded-full text-black">
          sanjai.me21@bitsathy.ac.in
        </a>
      </div>
     
    </div>
  );
};

export default Footer;
