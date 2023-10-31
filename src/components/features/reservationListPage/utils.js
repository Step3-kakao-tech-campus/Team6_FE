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
    예약완료 : "Reserved",
    확인중 : "Checking",
    예약거절 : "Rejected",
    이용완료 : "Finished",
}

export const getReserveText = (status) => {
    return RESERVE_STATUS[status];
}