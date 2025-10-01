function checkChar(str, charToCheck) {
  // substring(start, end) → end index excluded
  let sub = str.substring(1, 5);  // index 1 से 3 तक
  console.log(sub)
  if (sub.includes(charToCheck)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkChar("AkashB", "k")); // true (index 1-3 = "kas")
