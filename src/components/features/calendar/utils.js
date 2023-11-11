export const isSameDay = (day1, day2) => {
  return (
    day1.getFullYear() === day2.getFullYear() &&
    day1.getMonth() === day2.getMonth() &&
    day1.getDate() === day2.getDate()
  );
};

export const isOperatingDay = (targetDay, holidays) => {
  if (typeof holidays === "number") {
    holidays = [holidays];
  }
  if (holidays === undefined) {
    return true;
  }
  const today = new Date();
  return !(holidays.includes(targetDay.getDay()) || targetDay < today);
};

export const isInPeriod = (targetDay, startDate, endDate) => {
  if (startDate === undefined || endDate === undefined) {
    return true;
  }
  if (typeof startDate === "string") {
    startDate = new Date(startDate);
  }
  if (typeof endDate === "string") {
    endDate = new Date(endDate);
  }
  return targetDay >= startDate && targetDay <= endDate;
};

export const stringToDate = (dateString) => {
  if (dateString === undefined) {
    return undefined;
  }
  let [year, month, date] = dateString.split("-");
  if (year.length === 2) {
    year = "20" + year;
  }
  return new Date(year, month - 1, date);
}