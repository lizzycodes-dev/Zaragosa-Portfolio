import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";
import profile from "../../assets/images/profile.jpg";

export default function Hero() {
    return (
        <section className="container" id="home">

            {/* Top Right Icons */}
            <div className="hero-icons">

                <a href="https://github.com/lzaragosa555459-eng"
                    target="_blank"
                >
                    <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/liz-zaragosa-293b5b338/?skipRedirect=true"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>

                <a href="#">
                    <FaFacebook />
                </a>

            </div>

            {/* Hero Information */}
            <div className="information">

                <img
                    src={profile}
                    alt="Liz Zaragosa"
                    className="profile-image"
                />

                <div className="profile-details">

                    <h1>Liz Zaragosa</h1>

                    <p className="role">
                        Aspiring Software Engineer
                    </p>

                    <p className="email">
                        l.zaragosa.555459@umindanao.edu.ph
                    </p>

                </div>

            </div>

        </section>
    );
}