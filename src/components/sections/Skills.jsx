import {
    FaReact,
    FaPhp,
    FaLaravel,
    FaGitAlt,
    FaGithub,
    FaDocker,
} from "react-icons/fa";

import {
    SiMysql,
    SiLinux,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
export default function Skills() {

    return (

        <section className="container skills" id="skills">

            <span className="section-title">
                SKILLS
            </span>

            <h2>Technologies I Work With</h2>

            <p>
                Modern tools that I use for building full-stack applications.
            </p>

            <div className="tech-cloud">

                <div className="tech react">
                    <FaReact />
                    <span>React</span>
                </div>

                <div className="tech laravel">
                    <FaLaravel />
                    <span>Laravel</span>
                </div>

                <div className="tech php">
                    <FaPhp />
                    <span>PHP</span>
                </div>

                <div className="tech mysql">
                    <SiMysql />
                    <span>MySQL</span>
                </div>

                <div className="tech docker">
                    <FaDocker />
                    <span>Docker</span>
                </div>

                <div className="tech linux">
                    <SiLinux />
                    <span>Linux</span>
                </div>

                <div className="tech git">
                    <FaGitAlt />
                    <span>Git</span>
                </div>

                <div className="tech github">
                    <FaGithub />
                    <span>GitHub</span>
                </div>

                <div className="tech vscode">
                    <VscCode />
                    <span>VS Code</span>
                </div>

            </div>

        </section>

    );
}