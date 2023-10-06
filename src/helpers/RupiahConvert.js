export function rupiahConvert(number) {
  const strNumber = String(number).padStart(2, "0");

  const groups = [];
  for (let i = strNumber.length; i > 0; i -= 3) {
    groups.unshift(strNumber.slice(Math.max(0, i - 3), i));
  }

  const formatted = "Rp. " + groups.join(".");

  return formatted;
}
