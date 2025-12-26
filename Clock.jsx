import { useEffect, useState } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hourDeg = (time.getHours() / 12) * 360;
  const minuteDeg = (time.getMinutes() / 60) * 360;
  const secondDeg = (time.getSeconds() / 60) * 360;

  return (
    <div className="clock">
      <div className="numbers">
        <div className="twelve">12</div>
        <div className="three">3</div>
        <div className="six">6</div>
        <div className="nine">9</div>
      </div>

      <div className="arrows">
        <div
          className="hour"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        ></div>

        <div
          className="minute"
          style={{ transform: `rotate(${minuteDeg}deg)` }}
        ></div>

        <div
          className="second"
          style={{ transform: `rotate(${secondDeg}deg)` }}
        ></div>
      </div>

      <img
        src="https://1000logos.net/wp-content/uploads/2017/05/Rolex-logo.png"
        alt="rolex-logo"
      />
    </div>
  );
};

export default Clock;
