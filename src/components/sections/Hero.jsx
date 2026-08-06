import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";
import profile from "../../assets/images/profile.jpg";

export default function Hero() {
    return (
        <section className="container">

            {/* Top Right Icons */}
            <div className="hero-icons">

                <a href="#">
                    <FaGithub />
                </a>

                <a href="#">
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