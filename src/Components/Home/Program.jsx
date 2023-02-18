import React from "react";

export default function Program() {
  const details = [
    ["mon", "Functional Training"],
    ["tue", "FitnessTraining"],
    ["wed", "Running"],
    ["thu", "Mobility"],
    ["fri", "Athletes Training"],
    ["sat", "Stretch and Relaxing"],
  ];
  return (
    <div id="program" className="mt-5">
      <header>
        <h3 className="program-header">4-WEEK BEGINNER’S WORKOUT PROGRAM</h3>
      </header>
      <div className="programs__content">
        {details.map((detail, index) => {
          return <ProgramBox key={index} day={detail[0]} caption={detail[1]} />;
        })}
      </div>
    </div>
  );
}
function ProgramBox({ day, caption }) {
  return (
    <div className="program-box ">
      <h6 className="upper-case program-box__heading">{day}</h6>
      {/* <hr className="my-hr" /> */}
      {/* <span className="dot" /> */}
      {/* <hr className="my-hr" /> */}
      <p className=" program-box__caption">{caption}</p>
    </div>
  );
}
