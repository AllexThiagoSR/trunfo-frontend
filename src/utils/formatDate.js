const formatDate = (date) => {
  const withoutTime = date.split('T')[0];
  const newDate = new Date(withoutTime);
  return newDate.toDateString();
};

export default formatDate;
