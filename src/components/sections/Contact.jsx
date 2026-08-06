import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaEnvelope
} from "react-icons/fa";

export default function Contact() {

    return (

        <section className="container contact">

            <span className="section-title">
                CONTACT
            </span>

            <h2>
                Let's Build Something Together.
            </h2>

            <p className="contact-description">

                Whether you want to collaborate,
                discuss software engineering,
                cloud computing,
                or simply say hello,
                I'm always open to connecting.

            </p>

            <a
                href="mailto:l.zaragosa.555459@umindanao.edu.ph"
                className="email-link"
            >

                <FaEnvelope />

                l.zaragosa.555459@umindanao.edu.ph

            </a>

            <div className="social-links">

                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://facebook.com/yourusername"
                    target="_blank"
                >
                    <FaFacebook />
                </a>

            </div>

        </section>

    );

}