import moment from "moment";

function dateFormatting(date) {
  const start = moment(date);
  const end = moment(Date.now());
  const diffInMinutes = end.diff(start, "minutes");

  if (diffInMinutes >= (24 * 60)) {
    return `${Math.floor(diffInMinutes / (24 * 60))} дней назад`;
  }

  if (diffInMinutes >= 60) {
    return `${Math.floor(diffInMinutes / 60)} часов назад`;
  }

  return `${diffInMinutes} минут назад`;
}

export default dateFormatting;
