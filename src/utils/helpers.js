const date = new Date();

// To get the current time
export const time = date.toLocaleTimeString("default", {
  hour: "2-digit",
  minute: "2-digit",
});

// To get the current Date
export const day = date.toLocaleDateString("default", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});
