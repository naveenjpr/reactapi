import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import toparrow from "../image/icon-top-arrow-16.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  return (
    <>
      <div className="fixed bottom-[10px] right-0 bg-[grey] p-[10px] rounded-lg">
        <Link to={"#top"} onClick={scrollToTop}>
          <img src={toparrow} className="" />
        </Link>
      </div>
    </>
  );
}
