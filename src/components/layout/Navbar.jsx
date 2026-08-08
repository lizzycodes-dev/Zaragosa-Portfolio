
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-content">

                <a href="#home" className="navbar-logo">
                    liz's portfolio
                </a>

                <div className="navbar-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#blog">Blog</a>
                    <a href="#certifications">Certifications</a>
                    <a href="#contact">Contact</a>
                </div>

            </div>
        </nav>
    );
}

