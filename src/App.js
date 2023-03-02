import "./App.css";
import { useState } from "react";

function App() {
  const MONTHS = 11;
  const [range, setRange] = useState([...Array(11 * 4).keys()]);
  const [unit, setUnit] = useState("week");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Burn Calendar for {MONTHS} months</h1>
        <h2>
          in&nbsp;
          <select
            onChange={(e) => {
              const value = e.target.value;
              if (value === "month") {
                setRange([...Array(MONTHS).keys()]);
                setUnit("month");
              } else if (value === "week") {
                setRange([...Array(MONTHS * 4).keys()]);
                setUnit("week");
              } else if (value === "day") {
                setRange([...Array(MONTHS * 4 * 7).keys()]);
                setUnit("day");
              }
            }}
          >
            <option value="week">Weeks</option>
            <option value="month">Months</option>
            <option value="day">Days</option>
          </select>
        </h2>
      </header>

      <section>
        {range.map((item) => {
          return <div className={unit}></div>;
        })}
      </section>
    </div>
  );
}

export default App;
