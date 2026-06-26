import { createFileRoute } from "@tanstack/react-router";

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
    <iframe
      src="/portfolio/index.html"
      title="Portfolio"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
      }}
    />
  );
}
