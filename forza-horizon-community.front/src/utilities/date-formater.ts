const dateToString = (isoDate: Date) => {
  const date = new Date(isoDate);
  return date.toLocaleString("en-US");
};

const dateFormater = { dateToString };

export default dateFormater;
