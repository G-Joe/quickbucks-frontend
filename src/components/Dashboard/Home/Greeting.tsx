import React from "react";
import smile from "assets/smile-icon.svg"
import "./index.css"

const Greeting = () => {
  return (
    <div className="Greetings">
      <div className="username-greeting">Hi Solomon,</div>
      <div className="TimeGreeting">Good afternoon, how are you doing today? <img src={smile} alt="smile" /></div>
    </div>
  );
};

export default Greeting;
