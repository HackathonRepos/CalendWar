import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import Event from "../../components/CalenderComponents/Event";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { mockData } from "./original";

function AuthenticatedCalendar() {
  const [value, onChange] = useState(new Date());
  const [historicalData, setHistoricalData] = useState(mockData);
  const [historyType, setHistoryType] = useState("Events");
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
  const changeType = (evt) => {
    setHistoryType(evt.target.value);
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
          <div>
            <h1>Pick a date!</h1>
          </div>
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
          <div>
            <h1>Events and Conflicts on {historicalData["date"]}</h1>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={historyType}
              onChange={changeType}
            >
              <MenuItem value={"Events"}>Events</MenuItem>
              <MenuItem value={"Births"}>Births</MenuItem>
              <MenuItem value={"Deaths"}>Deaths</MenuItem>
            </Select>
          </div>
          <div>
            {historicalData["data"][historyType].map((ev, i) => (
              <Event year={ev.year} description={ev.text} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticatedCalendar;
