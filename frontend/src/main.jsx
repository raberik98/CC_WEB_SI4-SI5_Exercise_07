import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Frame from "./Components/Frame/Frame";

import MainPage from "./Pages/MainPage/MainPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Frame />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
