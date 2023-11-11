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
    return getDateFromString(a.date) - getDateFromString(b.date);
  });
};

export const RESERVE_STATUS = {
    예약대기 : "Pending",
    예약완료 : "Reserved",
    리뷰완료 : "Reviewed",
}

export const getReserveText = (status) => {
    return RESERVE_STATUS[status];
}