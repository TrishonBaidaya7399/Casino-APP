export const getGradientFill = (active: boolean) => ({
  from: active ? "var(--orange-1)" : "currentColor",
  to: active ? "var(--yellow-1)" : "currentColor",
});
