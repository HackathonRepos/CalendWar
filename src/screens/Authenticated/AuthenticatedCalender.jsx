import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Select from "@material-ui/core/Select";
import axios from "axios";

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
        console.log(data);
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
          }}
        >
          <h1>Events and Conflicts on {historicalData["date"]}</h1>
        </div>
      </div>
    </div>
  );
}

export default AuthenticatedCalendar;
