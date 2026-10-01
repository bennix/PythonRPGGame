export function unlockedLevel(done, total) {
  let level = 0;
  while (level < total && done.includes(level)) level++;
  return Math.min(level, total - 1);
}

export function canEnterLevel(done, level, total) {
  return Number.isInteger(level) && level >= 0 && level < total && level <= unlockedLevel(done, total);
}
