document.addEventListener("DOMContentLoaded", function () {
  const units = ["days", "hours", "minutes", "seconds"]; // Units to be displayed
  const container = document.getElementById("countdownContainer");

  // Generate HTML for each unit and append to the container
  units.forEach((unit) => {
    // Create a div element for each unit
    const div = document.createElement("div");
    div.className =
      "flex flex-col p-4 text-center text-white bg-gray-700 rounded-lg shadow-lg ";

    // Create and configure the number span
    const numberSpan = document.createElement("span");
    numberSpan.id = unit; // Use the unit name as ID
    numberSpan.className = "font-mono text-6xl countdown";
    numberSpan.textContent = "00"; // Initial value

    // Create and configure the label span
    const labelSpan = document.createElement("span");
    labelSpan.textContent = unit.charAt(0).toUpperCase() + unit.slice(1); // Capitalize the first letter
    labelSpan.className = "text-xl";

    // Build the div structure
    div.append(numberSpan, labelSpan);

    // Append div to the container
    container.append(div);
  });

  // Function to update countdown every second
  const interval = setInterval(function () {
    updateCountdown(units);
  }, 1000);

  function updateCountdown(units) {
    const now = new Date();
    const countdownDate = new Date("2024/04/30 23:59:59");
    const distance = countdownDate - now;

    // Only run if the countdown hasn't finished
    if (distance >= 0) {
      units.forEach((unit) => {
        const unitValue = document.getElementById(unit);
        switch (unit) {
          case "days":
            unitValue.textContent = formatNumber(
              Math.floor(distance / (1000 * 60 * 60 * 24))
            );
            break;
          case "hours":
            unitValue.textContent = formatNumber(
              Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            );
            break;
          case "minutes":
            unitValue.textContent = formatNumber(
              Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            );
            break;
          case "seconds":
            unitValue.textContent = formatNumber(
              Math.floor((distance % (1000 * 60)) / 1000)
            );
            break;
        }
      });
    } else {
      // Clear interval and set all to 00 when countdown finishes
      clearInterval(interval);
      units.forEach((unit) => {
        const unitValue = document.getElementById(unit);
        unitValue.textContent = "00";
      });
    }
  }

  // Utility function to format numbers as two digits
  function formatNumber(number) {
    return number < 10 ? "0" + number : number.toString();
  }
});
