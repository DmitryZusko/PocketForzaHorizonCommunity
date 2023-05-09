const dateToString = (isoDate: Date) => {
  const date = new Date(isoDate);
  return date.toLocaleString("en-US");
};

export const dateFormater = { dateToString };
