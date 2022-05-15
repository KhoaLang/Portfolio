import "./App.scss";
import Hero from "./components/hero/Hero";

import "boxicons";
import NavMenu from "./components/layouts/navmenu/NavMenu";
import MyInfo from "./components/myinfo/MyInfo";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <NavMenu />
      <Hero />
      <MyInfo />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
