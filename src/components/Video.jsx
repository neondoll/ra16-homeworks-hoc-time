import dateFormatting from "../functions/dateFormatting.js";
import DateTime from "./DateTime.jsx";
import PropTypes from "prop-types";
import withFormatting from "./hoc/withFormatting.jsx";

const DateTimePretty = withFormatting(dateFormatting, "date")(DateTime);

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

Video.propTypes = { url: PropTypes.string.isRequired, date: PropTypes.string.isRequired };

export default Video;
