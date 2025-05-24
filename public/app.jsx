// app.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css";
import Header from "./components/Header.jsx";
import ZeroTestForm from "./components/ZeroTestForm.jsx";
import CornerLoadTestForm from "./components/CornerLoadTestForm.jsx";
import RepeatabilityTestForm from "./components/RepeatabilityTestForm.jsx";
import PerformanceTestForm from "./components/PerformanceTestForm.jsx";

const App = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <Header />

      <ZeroTestForm />
      <CornerLoadTestForm />
      <RepeatabilityTestForm />
      <PerformanceTestForm />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
