import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as playIcon from "./assets/play.png";
import { updateVideoPlayStatus } from "./actions";

function Video({ isPlaying, updateVideoPlayStatus }) {
  const videoEl = React.useRef(null);

  React.useEffect(() => {
    if(isPlaying){
      videoEl.current.play();
    } else {
      videoEl.current.pause();
    }
  }, [isPlaying]);

  function handleClick() {
    updateVideoPlayStatus(true);
  }

  return (
    <div>
      <VideoElement
        width="400"
        height="270"
        ref={videoEl}
        controls={isPlaying}
        isplaying={isPlaying}
      >
        <source src="" type="video/mp4" />
      </VideoElement>
      {!isPlaying && (
        <CustomControls>
          <CustomIcon src={playIcon} onClick={handleClick} />
        </CustomControls>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  isPlaying: state.video.isPlaying,
});

const mapDispatchToProps = dispatch => ({
  updateVideoPlayStatus: status =>
      dispatch(updateVideoPlayStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Video);

const VideoElement = styled.video`
  border-radius: 1rem;
  position: absolute;
  top: 50px;
  left: 50%;
  ${p => p.isplaying && "z-index: 10;"}
`;

const CustomControls = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50px;
  left: 50%;
  width: 400px;
  height: 270px;
  background-color: #111f3b;
  border-radius: 1rem;
`;

const CustomIcon = styled.img`
  cursor: pointer;
`;
