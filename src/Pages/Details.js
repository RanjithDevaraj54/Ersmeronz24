import React from "react";
import { Link } from "react-scroll";
import { FaRupeeSign } from "react-icons/fa";

const Details = () => {
  const offer = [
    {
      name: "Proffesional",
      price: 250,
      events: [
        {
          name: "technical",
          num: "2",
        },
        {
          name: "non-technical",
          num: "1",
        },
      ],
      type: "Individual",
    },
    {
      name: "Proffesional",
      price: 300,
      events: [
        {
          name: "technical",
          num: "1",
        },
        {
          name: "non-technical",
          num: "1",
        },
        {
          name: "workshop",
          num: "1",
        },
      ],
      type: "Team or Individual",
    },
  ];
  return (
    <div
      id="Details"
      className=" relative z-20 max-w-[100vw] min-h-[100vh] bg-black flex flex-col items-center gap-5 justify-center text-center"
    >
      <div className="  grid grid-cols-2 max-sm:grid-cols-1   items-center gap-10 justify-center">
        {offer &&
          offer.map((o) => {
            return (
              <div className="  text-left w-96 max-sm:w-full max-sm:hover:scale-0  hover:ring-1 hover:ring-primary hover:scale-110 transition-all  duration-500 ease-in-out   bg-background border flex flex-col gap-5 items-start p-5 py-10 justify-center border-secondary/50     rounded-md">
                <p className=" text-primary ">{o.type}</p>
                <div>
                  <p className=" text text-7xl max-sm:-ml-20 -ml-20 -mt-2 flex"><FaRupeeSign />{o.price}</p>
                  <p className=" text-sm max-sm:text-xs text-secondary/50 font-bold">
                    only Entry fee
                  </p>
                </div>
                <div className=" max-sm:w-full border border-secondary w-full rounded-md bg flex flex-col items-start justify-center p-5 gap-5">
                  <p className="  text-white">Events</p>
                  {o.events &&
                    o.events.map((e) => {
                      return (
                        <div className=" p-2  text-white border-b border-b-secondary/50 flex items-center w-full justify-between">
                          <p>{e.name}</p>
                          <p>{e.num}</p>
                        </div>
                      );
                    })}
                  <Link
                    to={"Events"}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" bg-primary text-black w-full p-2 rounded-md hover:ring-2 hover:ring-offset-1  text-center transition-all duration-500 ease-in-out hover:ring-offset-primary hover:ring-primary/30 hover:bg-black hover:text-primary shadow-xl shadow-primary/20"
                  >
                    Get Started
                  </Link>
                </div>
                <div className=" flex items-start flex-col justify-center gap-2">
                  <p className=" text-white">Included</p>
                  <p className=" flex items-center justify-center gap-4">
                    <svg
                      fill="none"
                      viewBox="0 0 15 15"
                      height="1em"
                      width="1em"
                      className=" text-primary"
                    >
                      <path stroke="currentColor" d="M4 7.5L7 10l4-5" />
                    </svg>
                    Food Free
                  </p>
                  <p className=" flex items-center justify-center gap-4">
                    <svg
                      fill="none"
                      viewBox="0 0 15 15"
                      height="1em"
                      width="1em"
                      className=" text-primary"
                    >
                      <path stroke="currentColor" d="M4 7.5L7 10l4-5" />
                    </svg>
                     Free Accomodation
                  </p>
                  <p className=" flex items-center justify-center gap-4">
                    <svg
                      fill="none"
                      viewBox="0 0 15 15"
                      height="1em"
                      width="1em"
                      className=" text-primary"
                    >
                      <path stroke="currentColor" d="M4 7.5L7 10l4-5" />
                    </svg>
                    Free Certificates from Industries
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Details;
