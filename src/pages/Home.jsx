import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import Blog from "../components/sections/Blog";


export default function Home() {
    return (
        <div className="min-h-screen bg-slate-100 ">
            <Navbar />
            <div className="max-w-4xl mx-auto px-8 py-7 text-base text-gray-600 leading-8">
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Blog />
                    <Certifications />
                    <Contact />
                </main>

                <Footer />
            </div>
        </div>
    );
}