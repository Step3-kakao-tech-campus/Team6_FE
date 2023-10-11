export const isSameDay = (day1, day2) => {
  return (
    day1.getFullYear() === day2.getFullYear() &&
    day1.getMonth() === day2.getMonth() &&
    day1.getDate() === day2.getDate()
  );
};

export const isAvailableDay = (targetDay, unavailableDays) => {
  const today = new Date();
  return !(unavailableDays.includes(targetDay.getDay()) || targetDay < today);
};
