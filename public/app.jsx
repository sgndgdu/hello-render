// app.jsx
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css";
import Header from "./components/Header.jsx";
import TestSelector from "./components/TestSelector.jsx";
import ZeroTestForm from "./components/ZeroTestForm.jsx";
import CornerLoadTestForm from "./components/CornerLoadTestForm.jsx";
import RepeatabilityTestForm from "./components/RepeatabilityTestForm.jsx";
import PerformanceTestForm from "./components/PerformanceTestForm.jsx";

const App = () => {
  const [selectedTest, setSelectedTest] = useState("zero");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Header />
      <TestSelector selectedTest={selectedTest} setSelectedTest={setSelectedTest} />
      {selectedTest === "zero" && <ZeroTestForm />}
      {selectedTest === "corner" && <CornerLoadTestForm />}
      {selectedTest === "repeat" && <RepeatabilityTestForm />}
      {selectedTest === "performance" && <PerformanceTestForm />}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
