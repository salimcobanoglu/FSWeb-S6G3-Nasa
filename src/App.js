import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BiComponent from "./components/BiComponent";

export default function App() {
  const [apodData, setApodData] = useState();
  const [datePicker, setdatePicker] = useState(
    new Date("2022-08-21").toISOString().slice(0, 10)
  );

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "0lbrN8FE4aj0mBSTfpot8aOkwuhSfDrwA1bmHF9A",
          date: datePicker,
        },
      })
      .then(function(response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }, [datePicker]);

  return (
    <div className="App">
      <BiComponent data={apodData} dateChange={setdatePicker} />
    </div>
  );
}
