// Define a function named exam_status with parameters totmarks and is_exam
function exam_status(totmarks, is_exam) {
  // Check if is_exam is truthy (evaluates to true)
  if (is_exam) {
    // Return true if totmarks is greater than or equal to 90
    return totmarks >= 90;
  }

  // Return true if totmarks is between 89 and 100 (inclusive)
  return totmarks >= 89 && totmarks <= 100;
}

// Log the result of calling exam_status with arguments "78" and " " to the console
console.log(exam_status("78", " "));

// Log the result of calling exam_status with arguments "89" and "true " to the console
console.log(exam_status("89", "true "));

// Log the result of calling exam_status with arguments "99" and "true " to the console
console.log(exam_status("99", "true ")); 
