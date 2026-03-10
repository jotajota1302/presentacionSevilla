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
    />
  </>
);

registerRoot(RemotionRoot);
