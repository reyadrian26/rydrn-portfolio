import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact.jsx";
import Footer from "@/Components/Footer/Footer.jsx";
import Home from "@/Components/Home/Home.jsx";
import Navbar from "@/Components/Navbar/Navbar.jsx";
import Portfolio from "@/Components/Portfolio/Portfolio.jsx";
import { SliderData } from "@/Components/Portfolio/SliderData.jsx";
import Resume from "@/Components/Resume/Resume";
import ScrollRevealComponent from "../Components/ScrollReveal";
import Experience from "@/Components/Experience/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollRevealComponent>
        <Home />
        <About />
        <Resume />
        <Experience/>
        <Portfolio slides={SliderData} />
        <Contact />
        <Footer />
      </ScrollRevealComponent>
    </>
  );
};

export default App;
