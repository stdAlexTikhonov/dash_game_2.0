import React, { useEffect, useRef } from "react";

export const Dev = () => {
  const requestIdRef = useRef(null as null | number);
  const codeRef = useRef<HTMLElement>(null);

  const renderFrame = () => {
    codeRef.current!.innerText = "Hi";
  };

  const tick = () => {
    if (!codeRef.current) return;
    requestIdRef.current = requestAnimationFrame(tick);
    renderFrame();
  };

  useEffect(() => {
    requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef!.current!);
    };
  }, []);

  return (
    <code style={{ background: "white", margin: "auto" }} ref={codeRef}>
      Hello
    </code>
  );
};
