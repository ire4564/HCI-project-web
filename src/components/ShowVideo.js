import ReactPlayer from 'react-player';
import Block from "./Block";

const StartVideo = () => {
    return(
        <div></div>
    );
}

const ShowVideo = (props) => {
    return (
        <div className="Z-index">
            <Block/>
            <ReactPlayer 
            className="VideoPlayer"
            url={props.url} 
            onStart={StartVideo}
            width="100vw"
            height="100vh"
            muted 
            playing={true} 
            controls
            />
        </div>
    );
}

export default ShowVideo;