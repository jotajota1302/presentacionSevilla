import React from 'react';
import { Composition, registerRoot } from 'remotion';
import Main from './Main';

const RemotionRoot = () => (
  <>
    <Composition
      id="NativeAI"
      component={Main}
      durationInFrames={3990}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{ lang: 'en' as const }}
    />
    <Composition
      id="NativeAI-ES"
      component={Main}
      durationInFrames={3990}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{ lang: 'es' as const }}
    />
  </>
);

registerRoot(RemotionRoot);
