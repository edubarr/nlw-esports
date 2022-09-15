export function minuteStringToHour(minutesOriginal: number) {
  const hours = Math.floor(minutesOriginal / 60);
  const minutes = minutesOriginal % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}
