const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toDateString();
};

export default formatDate;
