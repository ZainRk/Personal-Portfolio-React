import React, { useContext } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { themeContext } from "../../Context";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: profilePic1,
      review:
        "Built front-end features with React JS, Redux toolkit, Sass, useFormik, and Bootstrap, and integrated role based access control (RBAC) using Git and GitHub for version control.Created a centralized repository for business information with user role-based permissions,enhancing resource management and access control.",
      title: "RBAC-enabled Business Information Repository in React",
    },
    {
      img: profilePic2,
      review:
        "The 'Notes' project was a web application aimed at learning React with TypeScript and Redux Toolkit for state management. It provided hands-on experience in modern web development. - The 'Notes' project was an educational web application for learning React, TypeScript, and Redux Toolkit, offering practical experience in contemporary web development.",
      title: "Notes",
    },
    {
      img: profilePic3,
      review:
        "Developed front-end features using Bootstrap, React JS, and Redux toolkit Developed REST APIs using Django and Express Used Git and GitHub for version control - Created a user-friendly travel platform, offering essential details on top hotels, tourist spots, and the locations of hospitals, petrol stations, and police stations, simplifying trip planning for travelers.",
      title: "City-Guide",
    },
    {
      img: profilePic4,
      review:
        "Coupons App for Internal use of company Created the 'Coupons App' to simplify employee meal coupon management and automate monthly billing. As the lead backend developer, utilized Express.js and MongoDB to build the system and essential APIs. Automated the billing process, introduced a user friendly meal booking system, and facilitated expense tracking for employees.",
      title: "Coupons App",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Recent Projects </span>
        <span>Portfolio</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <span>
                  <b style={{ color: darkMode ? "white" : "black" }}>
                    {client.title}
                  </b>
                </span>
                {/* <img className="t-img" src={client.img} alt="" /> */}
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
