import { useEffect, useState } from "react";
import { TIME_SERVER } from "../../constants/timeServer";
import "./AnalogClock.css";

export const AnalogClock = () => {
  const [date, setDate] = useState(0);
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [start, setStart] = useState(0);

  const clock = () => {
    setStart(date)
  };

  const [timer] = useState(setTimeout(clock, 1000));

  useEffect(() => {
    fetch(TIME_SERVER)
      .then(res => {
        if (res.status === 200) return res.json()
      })
      .then(data => {
        let date = new Date(data.data.datetime.date_time_ymd)
        setDate(date.getTime());
        let hh = date.getHours() * 30,
          mm = date.getMinutes() * 6,
          ss = date.getSeconds() * 6;
        setHour(`rotateZ(${hh + mm / 12}deg)`);
        setMinutes(`rotateZ(${mm}deg)`);
        setSeconds(`rotateZ(${ss}deg)`);
      }).catch((err) => {
        console.log(err);
      })

    return () => clearTimeout(timer)

  }, [start, timer])



  return (
    <div className="clock__circle">
      <span className="clock__twelve"></span>
      <span className="clock__three"></span>
      <span className="clock__six"></span>
      <span className="clock__nine"></span>

      <div className="clock__rounder"></div>
      <div className="clock__hour" style={{ transform: hour }}></div>
      <div className="clock__minutes" style={{ transform: minutes }}></div>
      <div className="clock__seconds" style={{ transform: seconds }}></div>
    </div>
  );
}