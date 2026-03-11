import React from "react";
import { AbsoluteFill } from "remotion";

export type Lang = "en" | "es";

export const Main: React.FC<{ lang: Lang }> = ({ lang }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#00245D",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "white", fontSize: 60 }}>
        {lang === "es" ? "Metodología NativeAI" : "NativeAI Methodology"}
      </h1>
      <p style={{ color: "#0097CF", fontSize: 30 }}>
        {lang === "es" ? "Video en construcción..." : "Video under construction..."}
      </p>
    </AbsoluteFill>
  );
};
