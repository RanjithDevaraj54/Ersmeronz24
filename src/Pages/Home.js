import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
const Home = () => {
  return (
    <div
      id="Home"
      className=" relative max-w-[100vw] min-h-[100vh]  text-center bg-black"
    >
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className=" absolute -top-40 scale-[2] bg-primary/20 rounded-full blur-3xl w-1/2 h-1/2 max-sm:-top-28 "></div>
      </div>
      <div className="relative flex items-center justify-center flex-col">
        <p className=" text font-growth max-sm:mt-40 text-[400px] max-sm:text-9xl ">Ersmeronz 24</p>
        <p className=" relative text-secondary  w-1/2 max-sm:w-full max-sm:mt-2 max-sm:text-xs  max-sm:px-10 tracking-widest -mt-28   z-10">
          A national-level techno fest that promises to be a convergence of brilliance, creativity, and cutting-edge advancements.
        </p>

        <button className=" max-sm:mt-28 mt-8">
          <a
            href="https://forms.gle/F1MaknXEZvRhKYZB7"
            className=" w-80 max-sm:w-96 relative z-10 hover:bg-primary hover:bg-none hover:text-black   bg text-primary  shadow-2xl shadow-primary/50   ring-4 ring-offset-2 ring-offset-primary ring-primary/30 p-3 px-5 text-lg font-light rounded-full  "
          >
            Registeration
          </a>
        </button>
      </div>
      <div className=" w-full flex items-center justify-between px-40 absolute z-30 -bottom-20 max-sm:bottom-20 max-sm:px-2">
        <div className=" text-3xl max-sm:text-sm  max-sm:px-5 flex items-center justify-center flex-col gap-2  "><FaArrowTrendUp className=" text-primary" /><p className=" text">Bannari Amman <br></br> institute of technology</p></div>
        <div className="  max-sm:text-sm  text-3xl flex items-center justify-center flex-col gap-2   "><FaArrowTrendUp className=" text-primary -rotate-180" /><p className=" text">Department of Electronics <br></br> and Instrumentation</p></div>
      </div>
    </div>
  );
};

export default Home;
