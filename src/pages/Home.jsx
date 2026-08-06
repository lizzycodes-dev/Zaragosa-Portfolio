import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";


export default function Home() {
    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-4xl mx-auto px-8 py-24 text-base text-gray-600 leading-8">
                <Navbar />

                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Certifications />
                    <Contact />
                </main>

                <Footer />
            </div>
        </div>
    );
}