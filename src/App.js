import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode)
  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <div className="">
      <Header
        mode={
          () => {
            setDarkMode(!darkMode);
              let html = document.querySelector("html");
              if(darkMode) {
                html.style.backgroundColor = "white";
              }else {
                html.style.backgroundColor = "rgb(17, 24, 39)";
                html.style.opacity = "1";
              }
              console.log(html)
          }
          }
      />
      <Hero />
      <Services />
      <Portfolio />
      <div className="max-w-full pt-px bg-teal-400 mx-8"></div>
      <Footer />
      </div>
    </main>
  );
}

export default App;
