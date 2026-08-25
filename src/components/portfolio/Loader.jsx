import { useEffect, useState } from "react";

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hidden ? "hide" : ""}`} aria-hidden="true">
      <div className="loader-ring"></div>
      <div className="loader-text">AJ</div>
    </div>
  );
}
