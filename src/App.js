import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");

  // Logic for BMI calculation
  let calcBMI = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      toast.error("Please enter a valid weight and height", {
        position: "top-center",
      });
    } else {
      let totalHeightInInches = height; // Assume height is directly in inches
      let heightInMeters = totalHeightInInches * 0.0254; // Convert height to meters
      let bmi = weight / (heightInMeters * heightInMeters); // BMI calculation
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        toast.warn("You are underweight", {
          position: "top-center",
        });
      } else if (bmi >= 18.5 && bmi < 24.9) {
        toast.info("You have a healthy weight", {
          position: "top-center",
        });
      } else {
        toast.warn("You are overweight", {
          position: "top-center",
        });
      }
    }
  };

  // Reload
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBMI}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (inches)</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
        </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
