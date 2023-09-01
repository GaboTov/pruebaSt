export default class DateManager {
  getWeekNumber(date: Date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const daysPassed =
      Math.floor(
        (date.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000)
      ) + 1;
    const weekNumber = Math.ceil(daysPassed / 7);
    return weekNumber;
  }
  getDatesForWeek(weekNumber: number, year: number): Record<string, Date> {
    const firstDayOfYear = new Date(year, 0, 1);
    const daysToAdd = (weekNumber - 2) * 7 + (7 - firstDayOfYear.getDay());
    const startDate = new Date(firstDayOfYear);
    startDate.setDate(startDate.getDate() + daysToAdd);

    const dates: Record<string, Date> = {};

    for (let i = 0; i < 7; i++) {
      const dayOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][i];
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + i);
      dates[dayOfWeek] = currentDate;
    }

    return dates;
  }
}
