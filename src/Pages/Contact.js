import React from "react";
import img1 from "../image/Mr-Prathap-M-R.jpg";
import img2 from "../image/Dr-Vairavel-K-S.jpg";
import img3 from "../image/Ms-Nandhini-K-M.png";
const Contact = () => {
  const Faculties = [
    {
      name: "Mr. Prathap M R",
      job: "Assistant Professor Level - II / EIE",
      img: img1,
    },
    {
      name: "Dr. Variravel K S",
      job: "Professor & HOD / EIE",
      img: img2,
    },
    {
      name: "Mrs. Nandhini K M",
      job: "Assistant Professor Level - II / EIE ",
      img: img3,
    },
  ];
  return (
    <div
      id="Contact"
      className=" relative max-w-[100vw] pt-40 px-40 max-sm:px-5  bg-black flex flex-col gap-5 items-center justify-center"
    >
      <p className=" text-primary text-xl  py-10 uppercase flex items-center justify-center gap-4">
        {" "}
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 11a5 5 0 015 5v6H7v-6a5 5 0 015-5zm-6.712 3.006a6.983 6.983 0 00-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 013.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0122 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 2a4 4 0 110 8 4 4 0 010-8z" />
        </svg>
        Our Team
      </p>
      <p className=" text text-5xl -mt-5 max-sm:-mt-10 max-sm:pb-5 pb-10  max-sm:text-xl  text-center">
        Faculty Coordinators
      </p>
      <div className=" grid grid-cols-3 max-sm:grid-cols-1 items-center w-full justify-center gap-5">
        {Faculties &&
          Faculties.map((f) => {
            return (
              <div className=" bg rounded-3xl w-full max-sm:w-full  border border-secondary/50 flex flex-col items-center justify-center gap-3 py-10   ">
                <img
                  src={f.img}
                  className=" h-40 rounded-full object-cover overflow-hidden"
                />
                <p className=" text  max-sm:text-xl text-3xl">{f.name}</p>
                <p className=" text-secondary -mt-3">{f.job}</p>
              </div>
            );
          })}
      </div>
      <div className=" bg max-sm:bg-none max-sm:border-0 border border-secondary/50 w-full rounded-3xl flex flex-col items-center justify-center gap-5  py-10">
        <div className=" grid grid-cols-3   max-sm:grid-cols-1 items-center h-full justify-center gap-10  ">

          <div className=" flex flex-col px-5 items-start max-sm:items-center max-sm:text-center justify-center">
            <p className=" text-primary pb-5">Address</p>
            <p>Bannari Amman Institute of Technology </p>
            <p>Sathy - Bhavani State Highway</p>
            <p>Alathukombai Post,</p>
            <p>Sathyamangalam, Erode District,</p>
            <p>Tamil Nadu 638401. </p>
          </div>
          <div className=" flex flex-col px-5 max-sm:pt-10 h-full gap-2  w-full items-center justify-center">
            <p className=" text-primary  pb-5">Student Coordinators</p>

            <p>9361326035</p>

            <p>8438836124</p>

            <p>8270571779</p>

            <p>9345774050</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.7630082058377!2d77.27452747481615!3d11.49701258869901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9215d6d1b28f9%3A0xf48946a7dfcfeb1a!2sBannari%20Amman%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1705056682470!5m2!1sen!2sin"
            width="600"
            height="450"
            className=" max-sm:w-full max-sm:pt-10 max-sm:rounded-md overflow-hidden w-80  h-60 px-5"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
              <div className=" mt-10 max-sm:mt-2">
          <div className=" flex items-center justify-center max-sm:flex-col  gap-5">
            <p>For More Details Contact :</p>
            <div className="  flex items-center justify-center gap-5">
              <a href="https://www.facebook.com/profile.php?id=100090145776065">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className=" active:text-primary active:scale-125 transition-all ease-in-out duration-300 text-xl  text-secondary"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                </svg>
              </a>
              <a href="">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className=" active:text-primary active:scale-125 transition-all ease-in-out duration-300 text-xl text-secondary"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z" />
                </svg>
              </a>
              <a href="https://instagram.com/ersmeronzz?igshid=ZDdkNTZiNTM=">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className=" active:text-primary active:scale-125 transition-all ease-in-out duration-300 text-xl text-secondary"
                >
                  <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
                </svg>
              </a>
              <a href="mailto:ersmeronz@bitsathy.ac.in">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className=" active:text-primary active:scale-125 transition-all ease-in-out duration-300 text-xl text-secondary"
                >
                  <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
              </a>
              <a href="">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className=" active:text-primary active:scale-125 transition-all ease-in-out duration-300 text-xl text-secondary"
                >
                  <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                </svg>
              </a>
              <a href="https://twitter.com/ersmeronz?t=XIvOnZZTWbKyg-k0lNR-8Q&s=35">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className=" active:text-primary active:scale-125 transition-all ease-in-out duration-300 text-xl text-secondary"
                >
                  <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
