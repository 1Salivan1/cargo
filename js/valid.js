function noDigits(e) {
  if ("1234567890".indexOf(e.key) != -1)
    e.preventDefault();
}