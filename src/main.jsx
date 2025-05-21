import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App";
import "./styles/refresh_styles.css";
import "modern-normalize";
import Friends from "./components/Friends";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Friends />
  </StrictMode>
);
