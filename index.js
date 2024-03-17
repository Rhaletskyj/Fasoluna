// Helper function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Main function to demonstrate factorial calculation
  function calculateFactorial() {
    // Get user input
    let number = parseInt(prompt("Enter a number to calculate its factorial:"));
  
    // Check if the input is a valid number
    if (isNaN(number)) {
      alert("Please enter a valid number.");
      return;
    }
  
    // Calculate factorial using the helper function
    let result = factorial(number);
  
    // Display the result
    alert("The factorial of " + number + " is: " + result);
  }
  
  // Call the main function
  calculateFactorial();