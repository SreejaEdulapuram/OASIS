function convertTemperature() {
    // Get user input
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect");
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    // Convert temperature
    let result;
    if (selectedUnit === "celsius") {
        result = (parseFloat(temperatureInput) * 9/5) + 32;
    } else {
        result = (parseFloat(temperatureInput) - 32) * 5/9;
    }

    // Display result
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = `Result: ${result.toFixed(2)} ${selectedUnit === "celsius" ? "°F" : "°C"}`;
}
