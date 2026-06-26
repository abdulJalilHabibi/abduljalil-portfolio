import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Frontend Developer Portfolio" },
      { name: "description", content: "Premium portfolio of Alex Carter, frontend developer." },
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
