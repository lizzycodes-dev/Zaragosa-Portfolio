import { GitHubCalendar } from "react-github-calendar";

const ubuntuTheme = {
    // level 0 (none) -> level 4 (most)
    dark: ["#380a2a", "#7a2e3b", "#b5471f", "#e95420", "#ff8a5c"],
};

export default function Contributions() {
    return (
        <section id="contributions" className="container contributions">
            <span className="section-title">GITHUB CONTRIBUTIONS</span>
            <h2>github contributions graph</h2>
            <p>my github contributions for this year</p>

            <div className="contribution-graph">
                <GitHubCalendar
                    username="lizzycodes-dev"
                    colorScheme="dark"
                    theme={ubuntuTheme}
                    blockSize={12}
                    blockMargin={4}
                    fontSize={14}
                    labels={{ totalCount: "{{count}} contributions in the last year" }}
                />
            </div>
        </section>
    );
}