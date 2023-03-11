export function formatQueryString(params) {
  return (
    "?" +
    Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&")
  );
}
