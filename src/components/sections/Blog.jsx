import { useState } from "react";

export default function Blog() {

    const [showMore, setShowMore] = useState(false);

    const featuredBlogs = [
        {
            title: "Building My Barangay Heatmap",
            date: "August 2026",
            read: "6 min read",
            description:
                "How I built a community reporting system using Laravel, React, and MySQL from planning to deployment.",
            image: "/images/blog1.png",
        },
        {
            title: "Understanding React Hooks",
            date: "July 2026",
            read: "5 min read",
            description:
                "My experience learning useState, useEffect, and thinking in React components.",
            image: "/images/blog2.png",
        },
    ];

    const moreBlogs = [
        {
            title: "Learning Docker",
            date: "June 2026",
            read: "4 min read",
            description:
                "My first experience using Docker and why containers make development easier.",
            image: "/images/blog3.png",
        },
        {
            title: "Cloud Engineer Roadmap",
            date: "May 2026",
            read: "7 min read",
            description:
                "The roadmap I'm following to become a Cloud Engineer after mastering software engineering.",
            image: "/images/blog4.png",
        },
        {
            title: "Git Tips I Use Everyday",
            date: "April 2026",
            read: "3 min read",
            description:
                "Small Git commands that helped me become more productive while building projects.",
            image: "/images/blog5.png",
        },
    ];

    return (

        <section className="container blog">

            <span className="section-title">
                BLOG
            </span>

            <h2>Learning Journey</h2>

            <p>
                Notes about what I'm learning, projects I've built,
                and lessons I've picked up while studying software engineering.
            </p>

            {/* Featured Blogs */}

            <div className="blog-list">

                {featuredBlogs.map((blog) => (

                    <BlogCard
                        key={blog.title}
                        blog={blog}
                    />

                ))}

            </div>

            {/* Expand Button */}

            <button
                className="expand-btn"
                onClick={() => setShowMore(!showMore)}
            >

                {showMore
                    ? "▲ Collapse Learning Journey"
                    : `▶ Expand Learning Journey (${moreBlogs.length} more articles)`}

            </button>

            {/* Hidden Blogs */}

            {showMore && (

                <div className="more-blogs">

                    <div className="divider"></div>

                    <h3 className="other-title">
                        More Articles
                    </h3>

                    <div className="blog-list">

                        {moreBlogs.map((blog) => (

                            <BlogCard
                                key={blog.title}
                                blog={blog}
                            />

                        ))}

                    </div>

                </div>

            )}

        </section>

    );

}

/* Reusable Blog Card */

function BlogCard({ blog }) {

    return (

        <article className="blog-card">

            <div className="blog-content">

                <span className="blog-meta">

                    {blog.date} • {blog.read}

                </span>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <button className="read-btn">

                    Read More →

                </button>

            </div>

            <div className="blog-image">

                <img
                    src={blog.image}
                    alt={blog.title}
                />

            </div>

        </article>

    );

}