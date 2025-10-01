function removescript(str) {
  let lower = str.toLowerCase();

  if (lower.startsWith("script") && lower.endsWith("script")) {
    // Remove the first "script"
    let middle = str.substring(6, str.length - 6);   //java print
    return "modify: " + middle;

  } else {
    return "original: " + str;
  }
}

console.log(removescript("ScriptJavaScript"));  // "modify: Java"
console.log(removescript("ScriptHelloScript")); // "modify: Hello"
console.log(removescript("JavaScript"));        // "original: JavaScript"
