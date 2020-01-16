/**
 * output log on to the page
 * @param value optional value
 */
export function log(value?: string): void {
  const logger = document.getElementById("log");
  if (logger && typeof value === "string" && value) {
    logger.innerText = value;
  }
}
