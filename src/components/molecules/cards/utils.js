/**
 * date 는 YYYY-MM-DD 형식
 * @param date {string} YYYY-MM-DD
 * @returns {boolean} 오늘 날짜보다 이전인지 여부
 */
export const isDateOver = (date) => {
    // date 는 YYYY-MM-DD 형식
    const today = new Date();
    const [year, month, day] = date.split("-");
    const dateToCompare = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return dateToCompare <= today;
};
/**
 * time 은 HH:MM 형식 24:00 까지 가능, undefined 일 경우 true
 * @param time {string} HH:MM
 * @returns {boolean} 현재 시간보다 이전인지 여부
 */
export const isTimeOver = (time) => {
    if (time === undefined) return true;
    // time 은 HH:MM 형식 24:00 까지 가능
    const today = new Date();
    const [hour, minute] = time.split(":");
    const timeToCompare = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        parseInt(hour),
        parseInt(minute),
    );
    return timeToCompare <= today;
};
/**
 * status 는 예약완료, 예약취소, 예약대기, 예약거절
 * @param status {string} 예약완료, 예약취소, 예약대기,
 * @param date {string} YYYY-MM-DD
 * @param time {string} HH:MM
 * @returns {boolean}
 */
export const isReviewable = (status, date, time) => {
    if (status !== "예약완료") return false;
    return isDateOver(date) && isTimeOver(time);
};