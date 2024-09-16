import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TeamList from "./components/TeamList";
import TeamMemberDesc from "./components/TeamMemberDesc";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Router>
      <div className="app-container container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<TeamList />} />
          <Route path="/team/:id" element={<TeamMemberDesc />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
