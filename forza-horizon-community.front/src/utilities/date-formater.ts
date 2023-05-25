const dateToString = (isoDate: Date) => {
  const date = new Date(isoDate);
  return date.toLocaleString("en-US");
};

const timeSpanStringToComponents = (timeSpan: string) => {
  const days = timeSpan
    .match(/^\d*\./g)
    ?.toString()
    .replaceAll(/\W/g, "");

  const hours = timeSpan
    .match(/\.\d*\:|^\d*\:/g)
    ?.toString()
    .replaceAll(/\W/g, "");

  const minutes = timeSpan
    .match(/\:\d*\:/g)
    ?.toString()
    .replaceAll(/\W/g, "");

  const seconds = timeSpan
    .match(/\:\d*\./g)
    ?.toString()
    .replaceAll(/\W/g, "");

  return { days, hours, minutes, seconds };
};

const dateFormater = { dateToString, timeSpanStringToComponents };

export default dateFormater;
