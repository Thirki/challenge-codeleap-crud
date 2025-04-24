export function getRelativeTimeFromNow(dateISOString: string): string {
  const eventDate = new Date(dateISOString);
  const now = new Date();

  const diffInSeconds = Math.floor(
    (now.getTime() - eventDate.getTime()) / 1000
  );
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (diffInSeconds < 60) return rtf.format(-diffInSeconds, "second");

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return rtf.format(-diffInMinutes, "minute");

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return rtf.format(-diffInHours, "hour");

  const diffInDays = Math.floor(diffInHours / 24);
  return rtf.format(-diffInDays, "day");
}
