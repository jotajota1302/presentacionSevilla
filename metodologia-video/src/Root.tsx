import React from "react";
import { Composition } from "remotion";
import { Main } from "./Main";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="NativeAI-Metodologia-ES"
        component={Main}
        durationInFrames={4620}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ lang: "es" as const }}
      />
      <Composition
        id="NativeAI-Metodologia-EN"
        component={Main}
        durationInFrames={4620}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ lang: "en" as const }}
      />
    </>
  );
};
