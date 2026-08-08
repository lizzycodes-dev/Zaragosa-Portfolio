import { useState } from "react";

const featuredProjects = [
    {
        title: "Barangay Heatmap",
        image: "/images/barangay.png",
        tech: "Laravel • React • MySQL",
    },
    {
        title: "Developer Portfolio",
        image: "/images/portfolio.png",
        tech: "React • TailwindCSS",
    },
];

const otherProjects = [
    {
        title: "StayFinder",
        image: "/images/stayfinder.png",
        tech: "React",
    },
    {
        title: "Inventory System",
        image: "/images/inventory.png",
        tech: "PHP",
    },
    {
        title: "Payroll System",
        image: "/images/payroll.png",
        tech: "Laravel",
    },
    {
        title: "POS System",
        image: "/images/pos.png",
        tech: "Java",
    },
];

export default function Project() {

    const [showMore, setShowMore] = useState(false);

    return (

        <section className="container project" id="projects">

            <span className="section-title">
                EXPERIENCE
            </span>

            <h2>Featured Projects</h2>

            <p>
                Projects that best represent my skills in software engineering,
                backend development, and full-stack applications.
            </p>

            <div className="project-grid">

                {featuredProjects.map((project) => (

                    <ProjectCard
                        key={project.title}
                        project={project}
                    />

                ))}

            </div>

            <button
                className="show-btn"
                onClick={() => setShowMore(!showMore)}
            >
                {showMore ? "Show Less ↑" : "View More ↓"}
            </button>

            {showMore && (

                <>

                    <div className="divider"></div>

                    <h3 className="other-title">
                        Other Projects
                    </h3>

                    <div className="project-grid">

                        {otherProjects.map((project) => (

                            <ProjectCard
                                key={project.title}
                                project={project}
                            />

                        ))}

                    </div>

                </>

            )}

        </section>

    );

}

function ProjectCard({ project }) {

    return (

        <div className="project-card">

            <img
                src={project.image}
                alt={project.title}
            />

            <div className="project-info">

                <h3>{project.title}</h3>

                <p>{project.tech}</p>

            </div>

        </div>

    );

}