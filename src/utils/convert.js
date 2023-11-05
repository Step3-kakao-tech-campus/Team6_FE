export const comma = (num) => {
  if (num === undefined || num === null) {
    return 0;
  }

  if (typeof num === "number" && isNaN(num)) {
    return 0;
  }

  if (typeof num === "string") {
    num = parseInt(num);
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const toUpperCaseFirstWord = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toUpperCaseFirstWordAll = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return toUpperCaseFirstWord(word);
    })
    .join(" ");
};

export const operationTimeToStartAndEnd = (operationTime) => {
  const start = operationTime.split("~")[0];
  const end = operationTime.split("~")[1];
  return { start, end };
};

/**
 * 문자를 시간으로 변환
 * @param hour
 * @param minute
 * @returns {Date}
 */
export const stringToTime = (hour, minute) => {
  const time = new Date();
  time.setHours(hour);
  time.setMinutes(minute);
  time.setSeconds(0);
  return time;
};

export const timeToString = (time) => {
  return `${time.getHours()}:${time.getMinutes()}`;
};

export const getAvailableTimes = (
  stringTimeStart,
  stringTimeEnd,
  interval,
  stringBreakTimeStart,
  stringBreakTimeEnd,
) => {
  const availableTimes = [];
  const isBreakTime = stringBreakTimeStart && stringBreakTimeEnd;
  const dateStartTime = stringToTime(
    stringTimeStart.split(":")[0],
    stringTimeStart.split(":")[1],
  );
  const dateEndTime = stringToTime(
    stringTimeEnd.split(":")[0],
    stringTimeEnd.split(":")[1],
  );
  const dateBreakTimeStart = stringToTime(
    stringBreakTimeStart.split(":")[0],
    stringBreakTimeStart.split(":")[1],
  );
  const dateBreakTimeEnd = stringToTime(
    stringBreakTimeEnd.split(":")[0],
    stringBreakTimeEnd.split(":")[1],
  );
  const intervalTime = interval * 60 * 1000;
  let currentTime = dateStartTime;
  while (currentTime < dateEndTime) {
    if (
      isBreakTime &&
      (currentTime < dateBreakTimeStart || currentTime >= dateBreakTimeEnd)
    ) {
      availableTimes.push(
        `${currentTime.getHours()}:${
          currentTime.getMinutes() >= 10
            ? currentTime.getMinutes()
            : `0${currentTime.getMinutes()}`
        }`,
      );
    }
    currentTime = new Date(currentTime.getTime() + intervalTime);
  }
  return availableTimes;
};
