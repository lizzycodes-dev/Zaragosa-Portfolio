import { useState } from "react";
import java from "../../assets/images/java.png";
import database from "../../assets/images/database.png";
import htmlcss from "../../assets/images/htmlcss.png";
import networking from "../../assets/images/networking.png";

export default function Certifications() {

    const [selected, setSelected] = useState(null);

    const certificates = [
        {
            title: "Java",
            issuer: "Certiport",
            logo: java,
            certificate: java,
        },
        {
            title: "Database",
            issuer: "Certiport",
            logo: database,
            certificate: database,
        },
        {
            title: "HTML & CSS",
            issuer: "Certiport",
            logo: htmlcss,
            certificate: htmlcss,
        },
        {
            title: "NETWORKING",
            issuer: "Certiport",
            logo: networking,
            certificate: networking,
        },
    ];

    return (

        <section className="container certifications" id="certifications">

            <span className="section-title">
                CERTIFICATIONS
            </span>

            <h2>Certificates</h2>

            <p>
                Certifications and credentials that support my
                software engineering journey.
            </p>

            <div className="certificate-grid">

                {certificates.map((certificate) => (

                    <div
                        key={certificate.title}
                        className="certificate-card"
                        onClick={() => setSelected(certificate)}
                    >

                        <img
                            src={certificate.logo}
                            alt={certificate.title}
                        />

                        <h3>{certificate.title}</h3>

                        <p>{certificate.issuer}</p>

                    </div>

                ))}

            </div>

            {/* Modal */}

            {selected && (

                <div
                    className="modal-overlay"
                    onClick={() => setSelected(null)}
                >

                    <div
                        className="modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="close-btn"
                            onClick={() => setSelected(null)}
                        >
                            ✕
                        </button>

                        <h2>{selected.title}</h2>

                        <img
                            src={selected.certificate}
                            alt={selected.title}
                        />

                    </div>

                </div>

            )}

        </section>

    );

}