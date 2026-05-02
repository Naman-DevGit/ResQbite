import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      <main className="grow">
        <HeroSection />
      </main>

      <Footer />

    </div>
  );
}

export default App;









































