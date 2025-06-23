export function formatNumber(num: number) {
  return num.toFixed(2);
}

export function formatUSDNumber(num: number) {
  return Math.floor(num).toLocaleString("en-US");
}

export function shortenNumber(num: number) {
  if (num >= 1_000_000_000_000)
    return (num / 1_000_000_000_000).toFixed(2) + "T";
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(2) + "K";
  return num.toFixed(2);
}

export function formatUSDNumberWithoutRoundingOff(num: number) {
  return num.toLocaleString("en-US");
}
