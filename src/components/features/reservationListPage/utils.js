/**
 *
 * @param date {string} - date in string format (YYYY-MM-DD)
 * @returns {Date} - date in Date format
 */
const getDateFromString = (date) => {
    const [year, month, day] = date.split("-").map((str) => parseInt(str));
    return new Date(year, month - 1, day);
}

export const sortReservation = (reservations) => {
  return reservations.sort((a, b) => {
    return new getDateFromString(a.date) - getDateFromString(b.date);
  });
};
