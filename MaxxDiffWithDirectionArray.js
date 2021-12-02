const profit = function (prices) {
  let minEl = prices[i],
    maxDiff = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - minEl > maxDiff) maxDiff = prices[i] - minEl;
    if (prices[i] < minEl) minEl = prices[i];
  }
  return maxDiff;
};
