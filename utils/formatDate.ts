const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function formatDate(inputDate: string, uppercase = false) {
  const date = new Date(inputDate);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  return `${uppercase ? month.toUpperCase() : month} ${date.getDate()}, ${date.getFullYear()}`;
}

export function formatDateWithDayName(inputDate: string) {
  const date = new Date(inputDate);
  return {
    dayName: DAYS[date.getDay()],
    monthName: MONTHS[date.getMonth()],
    dayNumber: date.getDate().toString().padStart(2, "0"),
  };
}
