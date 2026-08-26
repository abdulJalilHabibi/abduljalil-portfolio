import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "../components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdul Jalil — Frontend" },
      { name: "description", content: "Portfolio of Abdul Jalil, frontend developer based in Kabul." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="portfolio-page">
      <Portfolio />
    </div>
  );
}
