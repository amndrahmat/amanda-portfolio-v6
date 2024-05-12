import React from "react";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* <Switch>
          <Route path="/" exact component={Home} />
        </Switch> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
