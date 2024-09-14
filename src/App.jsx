import Header from "./ui/Header";
import Home from "./ui/Home";
import AboutUs from "./ui/AboutUs";
import BrandsLine from "./ui/BrandsLine";
import Subscripe from "./ui/Subscripe";
import Cases from "./ui/Cases";
import Process from "./ui/Process";
import Team from "./ui/Team";
import Testimonials from "./ui/Testimonials";
import Contact from "./ui/Contact";
import Footer from "./ui/Footer";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Home />
      <BrandsLine />
      <AboutUs />
      <Subscripe />
      <Cases />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
