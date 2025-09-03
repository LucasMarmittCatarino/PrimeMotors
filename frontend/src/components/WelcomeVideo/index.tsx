import {
    VideoBackground,
    VideoWrapper,
    Overlay,
} from "./styles";

import welcomeVideo from '~/assets/videos/welcomeVideo.mp4';

function WelcomeVideo() {
  return (
    <VideoWrapper>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={welcomeVideo} type="video/mp4" />
      </VideoBackground>
      <Overlay />
    </VideoWrapper>
  );
}


export default WelcomeVideo;