// This is an experiment to discover a function for 
// determining primality in linear time.

// An existing function for testing primality
function isPrimeA(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

// Experimental function
function isPrimeB(n) {
  if (n < 6) {
    return n == 2 || n % 2 != 0;
  }
  if (n % 5 == 0) {
    return false;
  }
  const lowerMultipleOf6 = Math.floor(n / 6) * 6;
  return lowerMultipleOf6 + 1 == n || lowerMultipleOf6 + 5 == n;
}


// Output indicates cases that isPrimeB does not answer correctly
for (let n = 2; n < 200; n++) {
  if (isPrimeA(n) !== isPrimeB(n)) {
    console.log(n);
  }
}


