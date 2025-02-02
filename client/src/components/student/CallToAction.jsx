import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div>
      <h1>Learn anything, anytime, anywere</h1>
      <p>
        Unlock your potential with expert-led courses—enroll today and take your
        skills to the next level!
      </p>
      <div>
        <button>Get Started</button>
        <button>
          Learn more <img src={assets.arrow_icon} alt="Arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
