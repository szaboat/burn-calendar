import "./App.css";
import { useState } from "react";

function App() {
  const MONTHS = 18;
  const [range, setRange] = useState([...Array(18 * 4).keys()]);
  const [unit, setUnit] = useState("week");
  const label = unit.trim().replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="App">
      <header className="App-header">
        <h1>Burn Calendar for {MONTHS} months</h1>
        <h2>
          by&nbsp;
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
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="day">Day</option>
          </select>
        </h2>
      </header>

      <section>
        {range.map((item) => {
          return (
            <div className={unit}>
              {label}
              <br />
              {range.length - item}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
