// Appliance power in Watts
const appliances = {
    fan: 50,
    light: 10,
    tv: 80
};

// Electricity rate per unit (example: ₹8 per kWh)
const pricePerUnit = 8;

// Event Listener
document.getElementById('calculate').addEventListener('click', function() {
    let totalPower = 0;
    for (let appliance in appliances) {
        if (document.getElementById(appliance).checked) {
            totalPower += appliances[appliance];
        }
    }
    let hours = parseInt(document.getElementById('hours').value) || 1;
    // Calculate units: Watts × hours / 1000 = kWh (units)
    let units = (totalPower * hours) / 1000;
    document.getElementById('units').textContent = units.toFixed(2);
    document.getElementById('bill').textContent = (units * pricePerUnit).toFixed(2);
});
