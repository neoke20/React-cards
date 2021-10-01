import "./styles.css";
import { useState } from "react";

export default function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [userInput, setUserInput] = useState([]);

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserInput(userInput.concat([{ firstname, lastname, position }]));
        }}
      >
        <label>
          First Name
          <input
            type="text"
            placeholder="John"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          ></input>
        </label>
        <label>
          Last Name
          <input
            type="text"
            placeholder="Doe"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          ></input>
        </label>
        <label>
          Position
          <select
            id="position"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
          >
            <option>-</option>
            <option>Manager</option>
            <option>Employee</option>
          </select>
        </label>
        <input type="submit" id="submit-button"></input>
      </form>
      <div onChange={(e) => setUserInput(e.target.value)}>
        {userInput.map((input, index) => (
          <div key={index} className="card" id={`card-${index}`}>
            <p>{`${input.firstname} ${input.lastname}`}</p>
            <p>{`${input.position}`}</p>
            <div>
              <button
                onClick={(e) => {
                  const alert = window.confirm(
                    `Delete ${input.firstname} ${input.lastname}?`
                  );
                  if (alert) {
                    const deletedInput = userInput.filter(
                      (i, ind) => ind !== index
                    );
                    setUserInput(deletedInput);
                  }
                }}
                className="button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
