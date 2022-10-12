import "./App.css";
import { useState, useEffect } from "react";
import logo from "./img/logo.png";
import stadium from "./img/estadio_lusail.jpg";
import groups from "./img/grupos.png";

function App() {
  const [time, setTime] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });
  const getTime = (date) => {
    let now = new Date();
    let remainTime = (new Date(date) - now + 1000) / 1000;
    let seconds = ("0" + Math.floor(remainTime % 60)).slice(-2);
    let minutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2);
    let hours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2);
    let days = Math.floor(remainTime / (3600 * 24));
    return {
      remainTime,
      seconds,
      minutes,
      hours,
      days,
    };
  };
  useEffect(() => {
    const countDown = () => {
      const timerUpdate = setInterval(() => {
        setTime(getTime("Sun Nov 20 2022 13:00:00 GMT-0300"));
      }, 1000);
    };
    countDown();
  }, []);

  return (
    <div className="container">
      <div className="info">
        <img src={logo} alt="" />
        <h1>Inicio de la copa del mundo</h1>
        <div className="time">
          <div>
            <h3>{time.days && time.days}</h3>
            <h4>Days</h4>
          </div>
          <div>
            <h3>{time.hours && time.hours}</h3>
            <h4>Hours</h4>
          </div>
          <div>
            <h3>{time.minutes && time.minutes}</h3>
            <h4>Minutes</h4>
          </div>
          <div>
            <h3>{time.seconds && time.seconds}</h3>
            <h4>Seconds</h4>
          </div>
        </div>
      </div>
      <div className="stadium">
        {" "}
        <img src={stadium} alt="" className="img_stadium" />
        <img src={groups} alt="" className="groups" />
      </div>
    </div>
  );
}

export default App;
