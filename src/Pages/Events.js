import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import ViewContainer from "../Components/ViewContainer";
import sample from "../image/human-big-data-visualization.jpg";
import { Link, useLocation } from "react-router-dom";
const Events = () => {
  const [day, setday] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getDocs(
          collection(db, location.state && location.state.name)
        );
        return setday(
          response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (err) {
        return console.log(err);
      }
    };
    fetch();
  }, []);

  console.log(location.state.name);
  return (
    <div
      id="Events"
      className=" max-w-[100vw] pt-20 px-40 max-sm:px-5 flex-col text-secondary min-h-[100vh] gap-10 bg-black flex items-center justify-center relative"
    >
      {location.state && location.state.name === "DayOne" ? (
        <p className=" text-5xl max-sm:text-xl text-secondary">Day One Events </p>
      ) : (
        <p className=" text-5xl max-sm:text-xl text-secondary">Day Two Events </p>
      )}
      <div className=" grid max-sm:grid-cols-1 grid-cols-2 w-full pb-20 items-center justify-center  px-10 max-sm:px-0 gap-10">
        {day &&
          day.map((d, i) => {
            return (
              <div className="p-10 w-full h-full  flex flex-col max-sm:bg-background max-sm:p-5 max-sm:rounded-md items-start justify-center gap-3">
                <div className=" ">
                  <ViewContainer
                    src={d.img ? d.img : sample}
                    hash={d.hash ? d.hash : "L597hPy?0200?]x@Q-8|IoRPnNtR"}
                  />
                </div>
                <p className=" text-3xl text ">{d.Name}</p>
                <div className=" flex items-center justify-between w-full">
                  <p className=" text-primary">{d.Type}</p>
                  <p className=" text-primary">{d.Time}</p>
                </div>
                <p className=" line-clamp-3 text-justify  text-secondary">
                  {d.Description}
                </p>
                <Link
                  to={"/rules"}
                  state={{ Rules: d.Rules }}
                  className=" bg-primary rounded-md w-full p-2 text-center text-black"
                >
                  Rules and Regulation
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Events;
