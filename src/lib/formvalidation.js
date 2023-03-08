export function validateComponentName(name) {
  const re = /\W/;
  if (name.length < 3) {
    return "Please provide at least 3 characters.";
  }
  return re.test(name.trim())
    ? "Your component name can't contain special characters or spaces."
    : null;
}
