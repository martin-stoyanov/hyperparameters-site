export default (a, b, n) => {
  if (typeof n === 'undefined') n = Math.max(Math.round(b - a) + 1, 1);
  if (n < 2) {
    return n === 1 ? [a] : [];
  }
  let i;
  const ret = Array(n);
  n -= 1;
  for (i = n; i >= 0; i -= 1) {
    ret[i] = ((i * b) + ((n - i) * a)) / n;
  }
  return ret;
};
