import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import Event from "../../components/CalenderComponents/Event";

function AuthenticatedCalendar() {
  const [value, onChange] = useState(new Date());
  const [historicalData, setHistoricalData] = useState({});
  const month = value.getMonth() + 1;
  const day = value.getDate();
  const handleChange = (val) => {
    onChange(val);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date/${month}/${day}`
      )
      .then(({ data }) => {
        setHistoricalData(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date/${month}/${day}`
      )
      .then(({ data }) => {
        console.log(data);
        setHistoricalData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="CalenderContent">
        <div style={{ marginLeft: "20px" }}>
          <h1>Pick a date!</h1>
          <Calendar
            onChange={handleChange}
            value={value}
            className="react-calendar"
            defaultView="year"
          />
        </div>
        <div
          style={{
            marginLeft: "40px",
            flex: "1",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Events and Conflicts on {historicalData["date"]}</h1>
          <div>
            {historicalData["data"]["Events"].map((ev, i) => (
              <Event year={ev.year} description={ev.text} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticatedCalendar;
