import { useEffect, useRef, useState } from "react";

export function useTypingEffect(phrases, options = {}) {
  const { typingSpeed = 90, deletingSpeed = 45, pause = 1400 } = options;
  const [text, setText] = useState("");
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout;
    const tick = () => {
      const phrase = phrases[indexRef.current];
      if (!deletingRef.current && charRef.current < phrase.length) {
        charRef.current += 1;
        setText(phrase.slice(0, charRef.current));
        timeout = setTimeout(tick, typingSpeed);
      } else if (deletingRef.current && charRef.current > 0) {
        charRef.current -= 1;
        setText(phrase.slice(0, charRef.current));
        timeout = setTimeout(tick, deletingSpeed);
      } else if (!deletingRef.current) {
        deletingRef.current = true;
        timeout = setTimeout(tick, pause);
      } else {
        deletingRef.current = false;
        indexRef.current = (indexRef.current + 1) % phrases.length;
        timeout = setTimeout(tick, 200);
      }
    };
    tick();
    return () => clearTimeout(timeout);
  }, [phrases, typingSpeed, deletingSpeed, pause]);

  return text;
}
