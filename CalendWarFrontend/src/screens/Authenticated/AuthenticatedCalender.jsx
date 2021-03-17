import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import Event from "../../components/CalenderComponents/Event";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function AuthenticatedCalendar() {
  const [value, onChange] = useState(new Date());
  const [historicalData, setHistoricalData] = useState({});
  const [historyType, setHistoryType] = useState("Events");
  const month = value.getMonth() + 1;
  const day = value.getDate();
  const handleChange = (val) => {
    onChange(val);
    axios
      .get(
        `https://calendwar-backend.herokuapp.com/api/history/${month}/${day}`
      )
      .then(({ data }) => {
        const { historyData } = data;
        setHistoricalData(historyData);
      })
      .catch((err) => console.log(err));
  };
  const changeType = (evt) => {
    setHistoryType(evt.target.value);
  };
  useEffect(() => {
    axios
      .get(
        `https://calendwar-backend.herokuapp.com/api/history/${month}/${day}`
      )
      .then(({ data }) => {
        const { historyData } = data;
        console.log(historyData);
        setHistoricalData(historyData);
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
          {historicalData["date"] === undefined ? (
            <h1>Loading</h1>
          ) : (
            <>
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
                  <Event
                    year={ev.year}
                    description={ev.text}
                    links={ev.links}
                    key={i}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthenticatedCalendar;
