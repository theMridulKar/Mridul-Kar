import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import Recommendations from "./components/Recommendations";
import Clients from "./components/Clients";
import YouTubeSection from "./components/YouTubeSection";

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">

        <div className="max-w-[1600px] mx-auto px-8 py-10">

          <div className="grid lg:grid-cols-[380px_1fr] gap-12">

          {/* Left Sidebar */}
          <Sidebar />

          {/* Right Content */}
          <main className="space-y-40">

            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Clients />
            <OtherProjects />
            <YouTubeSection />
            <Journey />
            {/* <Recommendations /> */}
            <Contact />
            <Footer />

          </main>

        </div>

      </div>

    </div>
  );
}

export default App;