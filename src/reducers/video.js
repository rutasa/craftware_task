const initialState = {
    isPlaying: false,
};

const video = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VIDEO_PLAY_STATUS':
            return {isPlaying: action.payload};
        default:
            return state;
    }
};

export default video;
