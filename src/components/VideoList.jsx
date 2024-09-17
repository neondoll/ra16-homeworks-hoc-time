import Video from "./Video.jsx";

function VideoList(props) {
  return props.list.map((item, index) => (
    <Video date={item.date} key={index + 1} url={item.url} />
  ));
}

export default VideoList;
