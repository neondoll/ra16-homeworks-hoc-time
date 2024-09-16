import React, { useState } from "react";
import moment from "moment";
import "./App.css";

function withFormatting(formatting, propName) {
  return Component => class extends React.Component {
    componentDidMount() {
      this.formattingData(this.props);
    }

    componentDidUpdate(prevProps) {
      if (this.props !== prevProps) {
        this.formattingData(this.props);
      }
    }

    formattingData(props) {
      this.setState({ [propName]: formatting(props[propName]) });
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }

    static get displayName() {
      const name = Component.displayName || Component.name || "Component";

      return `WithFormatting(${name})`;
    }
  };
}

function DateTime({ date }) {
  return (
    <p className="date">{date}</p>
  );
}

function dateFormatting(date) {
  const start = moment(date);
  const end = moment(Date.now());
  const diffInMinutes = end.diff(start, "minutes");

  console.log(start.toString(), end.toString(), diffInMinutes);

  if (diffInMinutes >= (24 * 60)) {
    return `${Math.floor(diffInMinutes / (24 * 60))} дней назад`;
  }

  if (diffInMinutes >= 60) {
    return `${Math.floor(diffInMinutes / 60)} часов назад`;
  }

  return `${diffInMinutes} минут назад`;
}

const DateTimePretty = withFormatting(dateFormatting, "date")(DateTime);

function Video({ date, url }) {
  return (
    <div className="video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={date} />
    </div>
  );
}

function VideoList({ list }) {
  return list.map((item, index) => (
    <Video date={item.date} key={index + 1} url={item.url} />
  ));
}

function App() {
  const [list] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-07-31 13:24:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-03-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-02-03 23:16:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00",
    },
  ]);

  return (
    <VideoList list={list} />
  );
}

export default App;
