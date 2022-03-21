import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";


function App() {
  const appTitle = "React Kitchen Sink"; // data in parent
  return (
  <React.Fragment>
    <Header title={appTitle} /> {/* pass data as attribute to child */}

    <Navigation/>

    <Footer />
  </React.Fragment>
  );
}

export default App;
