// Question:
// Write a program that performs the following tasks using promise chaining:

// Add two numbers (a + b).
// Multiply the result by another number.
// Subtract a number from the result.
// Log the final result.
function add(a, b) {
    return Promise.resolve(a + b);
  }
  
  function multiply(result, num) {
    return Promise.resolve(result * num);
  }
  
  function subtract(result, num) {
    return Promise.resolve(result - num);
  }
  
  // Input values
  const a = 5;
  const b = 10;
  const multiplyBy = 2;
  const subtractBy = 3;
  
  add(a, b)
    .then((sum) => multiply(sum, multiplyBy))
    .then((product) => subtract(product, subtractBy))
    .then((finalResult) => console.log("Final result is:", finalResult))
    .catch((err) => console.error("Error:", err));

    
    // Question:
    // Simulate fetching data from a server (use setTimeout), then:
    
    // Log the fetched data.
    // Transform the data (e.g., convert all strings to uppercase).
    // Log the transformed data.
    const fetchData = new Promise((resolve) => {
        setTimeout(() => {
          resolve(["apple", "banana", "cherry"]);
        }, 1000);
      });
      
      fetchData
        .then((data) => {
          console.log("Fetched data:", data);
          return data.map((item) => item.toUpperCase());
        })
        .then((transformedData) => {
          console.log("Transformed data:", transformedData);
        })
        .catch((err) => console.error("Error:", err));

        
        // Question:
        // Simulate three API calls using promises:
        
        // First API call resolves with the user's name.
        // Second API call takes the name and resolves with a greeting message.
        // Third API call takes the greeting message and resolves with a thank-you message.
        // Log each step in the promise chain.
        function fetchUserName() {
            return Promise.resolve("John");
          }
          
          function fetchGreeting(name) {
            return Promise.resolve(`Hello, ${name}!`);
          }
          
          function fetchThankYouMessage(greeting) {
            return Promise.resolve(`${greeting} Thank you for visiting.`);
          }
          
          fetchUserName()
            .then((name) => {
              console.log("Step 1: Fetched user name:", name);
              return fetchGreeting(name);
            })
            .then((greeting) => {
              console.log("Step 2: Greeting:", greeting);
              return fetchThankYouMessage(greeting);
            })
            .then((finalMessage) => {
              console.log("Step 3: Final message:", finalMessage);
            })
            .catch((err) => console.error("Error:", err));
          