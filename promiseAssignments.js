// 1. Basic Promise Example
// Question: Write a function that returns a promise. The promise should resolve with the message "The number is even" if the input number is even and reject with the message "The number is odd" if the number is odd. Test the function with both cases.

function checkNumber(num) {
  return new Promise((resolve, reject) => {
      if (num % 2 === 0) {
          resolve("The number is even.");
      } else {
          reject("The number is odd.");
      }
  });
}

// Test the function
checkNumber(4)
  .then((message) => console.log(message)) // Output: The number is even.
  .catch((error) => console.log(error));

checkNumber(7)
  .then((message) => console.log(message))
  .catch((error) => console.log(error)); // Output: The number is odd.



  // 2. Simulating Asynchronous API Call
  // Question: Simulate an API call that fetches user data after 2 seconds. The function should return a promise that resolves with mock user data.
  function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
            resolve(data);
        }, 2000); // 2-second delay
    });
}

// Test the function
fetchData()
    .then((data) => console.log("Data fetched successfully:", data))
    .catch((error) => console.log("Error fetching data:", error));


//     3. Chaining Promises
// Question: Write a function that generates a random number between 1 and 10. Use promise chaining to:

// Multiply the number by 2.
// Add 5 to the result.
// Divide the final result by 3.
// // Log the result at each step.

function getNumber() {
  return new Promise((resolve) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      resolve(randomNumber);
  });
}

getNumber()
  .then((num) => {
      console.log("Original Number:", num);
      return num * 2;
  })
  .then((num) => {
      console.log("After Multiplying by 2:", num);
      return num + 5;
  })
  .then((num) => {
      console.log("After Adding 5:", num);
      return num / 3;
  })
  .then((num) => console.log("After Dividing by 3:", num))
  .catch((error) => console.log("Error:", error));


//   4. Error Handling
// Question: Write a function that simulates fetching user data. If the user ID is less than 1, reject the promise with "Invalid User ID.". Otherwise, resolve it with mock user data. Test the function with valid and invalid inputs.

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
      if (userId < 1) {
          reject("Invalid User ID.");
      } else {
          const userData = { id: userId, name: "User" };
          resolve(userData);
      }
  });
}

// Test the function
fetchUserData(3)
  .then((data) => console.log("User Data:", data))
  .catch((error) => console.log("Error:", error));

fetchUserData(0)
  .then((data) => console.log("User Data:", data))
  .catch((error) => console.log("Error:", error)); // Output: Error: Invalid User ID.

  // 5. Using Promise.all
  // Question: Write three functions that return promises resolving after 1, 2, and 3 seconds, respectively. Use Promise.all to execute them concurrently and log a message when all are resolved.  
  function task1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 1 completed"), 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 2 completed"), 2000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 3 completed"), 3000);
    });
}

Promise.all([task1(), task2(), task3()])
    .then((results) => console.log("All tasks completed:", results))
    .catch((error) => console.log("Error:", error));
