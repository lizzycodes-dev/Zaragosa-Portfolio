import {
    FaMapMarkerAlt,
    FaGraduationCap,
    FaLaptopCode,
} from "react-icons/fa";

export default function About() {
    return (
        <section className="container about">

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
                    building scalable applications that positively impact
                    communities and businesses.
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

                <div className="skills-progress">

                    <h4>Currently Learning</h4>

                    <div className="progress">

                        <div className="progress-title">
                            <span>Laravel</span>
                            <span>85%</span>
                        </div>

                        <div className="bar">
                            <div className="fill laravel"></div>
                        </div>

                    </div>

                    <div className="progress">

                        <div className="progress-title">
                            <span>React</span>
                            <span>75%</span>
                        </div>

                        <div className="bar">
                            <div className="fill react"></div>
                        </div>

                    </div>

                    <div className="progress">

                        <div className="progress-title">
                            <span>Docker</span>
                            <span>40%</span>
                        </div>

                        <div className="bar">
                            <div className="fill docker"></div>
                        </div>

                    </div>

                    <div className="progress">

                        <div className="progress-title">
                            <span>Linux</span>
                            <span>55%</span>
                        </div>

                        <div className="bar">
                            <div className="fill linux"></div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}