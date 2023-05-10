//метод подсчёта времени в часах и минутах
export const calculateTiming = (minutes) => {
  return `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
};
