// Select the button element from the document
const toggleButton = document.querySelector("#toggleMode");

// Define the toggleTheme function to switch themes and update local storage
const toggleTheme = () => {
  // Check if the body has the 'dark-mode' class
  if (document.body.classList.contains("dark-mode")) {
    // Set theme in local storage to 'light-mode'
    localStorage.setItem("theme", "light-mode");
    // Remove the 'dark-mode' class from the body
    document.body.classList.remove("dark-mode");
    // Update the button text to indicate how to enable dark mode
    toggleButton.textContent = "Enable Dark Mode";
  } else {
    // Set theme in local storage to 'dark-mode'
    localStorage.setItem("theme", "dark-mode");
    // Add the 'dark-mode' class to the body
    document.body.classList.add("dark-mode");
    // Update the button text to indicate how to enable light mode
    toggleButton.textContent = "Enable Light Mode";
  }
};

// Define the applySavedTheme function to apply the saved theme from local storage on page load
const applySavedTheme = () => {
  // Retrieve the saved theme from local storage
  const savedTheme = localStorage.getItem("theme");
  // Apply 'dark-mode' if it is the saved theme
  if (savedTheme === "dark-mode") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Enable Light Mode";
  } else {
    // Otherwise, ensure 'dark-mode' is not applied
    document.body.classList.remove("dark-mode");
    toggleButton.textContent = "Enable Dark Mode";
  }
};

// Apply the saved theme when the page loads
applySavedTheme();

// Add a click event listener to the toggle button to switch themes when clicked
toggleButton.addEventListener("click", toggleTheme);

// Listen for storage changes in other tabs and apply theme changes accordingly
window.addEventListener("storage", (e) => {
  // If the changed key is 'theme', re-apply the saved theme
  if (e.key === "theme") {
    applySavedTheme();
  }
});
