import {
    FaMapMarkerAlt,
    FaGraduationCap,
    FaLaptopCode,
    FaCodeBranch,
} from "react-icons/fa";

export default function About() {
    return (
        <section className="container about" id="about">

            <div className="about-left">

                <span className="section-title">
                    ABOUT ME
                </span>

                <h2>
                    Passionate about building software that solves real-world problems.
                </h2>

                <p>
                    I'm Liz Zaragosa, a third-year BSIT student from the
                    University of Mindanao. I enjoy creating full-stack web
                    applications and continuously improving my backend,
                    frontend, and cloud development skills.
                </p>

                <p>
                    My goal is to become a Software Engineer capable of
                    building scalable, reliable, and user-friendly applications.
                </p>

            </div>

            <div className="about-right">

                <h3>Developer Profile</h3>

                <div className="profile-item">
                    <FaMapMarkerAlt />
                    <span>Davao City, Philippines</span>
                </div>

                <div className="profile-item">
                    <FaGraduationCap />
                    <span>BSIT • 3rd Year</span>
                </div>

                <div className="profile-item">
                    <FaLaptopCode />
                    <span>Aspiring Software Engineer</span>
                </div>

                <div className="profile-item">
                    <FaCodeBranch />
                    <span>Always Learning</span>
                </div>

                <div className="experience">

                    <h4>Experience Level</h4>

                    <div className="skill">
                        <span>Laravel</span>

                        <div className="dots">
                            <span className="active"></span>
                            <span className="active"></span>
                            <span className="active"></span>
                            <span className="active"></span>
                            <span></span>
                        </div>

                        <small>Comfortable</small>
                    </div>

                    <div className="skill">
                        <span>React</span>

                        <div className="dots">
                            <span className="active"></span>
                            <span className="active"></span>
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                        </div>

                        <small>Growing</small>
                    </div>

                    <div className="skill">
                        <span>Linux</span>

                        <div className="dots">
                            <span className="active"></span>
                            <span className="active"></span>
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                        </div>

                        <small>Growing</small>
                    </div>

                    <div className="skill">
                        <span>Docker</span>

                        <div className="dots">
                            <span className="active"></span>
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <small>Learning</small>
                    </div>

                </div>

            </div>

        </section>
    );
}