import React from "react";
import "./BackToTop.css";

export default function BackToTop() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      };
    
    return (
       
        <div onClick={scrollToTop} className="app--top">
            <h5>Back to top</h5> 
        </div>
    )
}