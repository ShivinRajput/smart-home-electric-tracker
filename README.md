# Smart Home Electric Tracker (Simulator)

A fun and simple application for class 6 children to understand home electricity usage.

---

## Features

- **Simulate Appliances**: Fan, Light, TV (add more as needed)
- **Set Hours**: Choose how long appliances are ON
- **Calculate Units**: See total units (kWh) used
- **Estimate Bill**: Get an approximate electricity bill

---

## How to Run Locally

**Requirements**:  
No software needed—just a web browser!

**Steps:**

1. **Download the Code**
    - Click “Code” > “Download ZIP” on GitHub (or use your teacher’s files).
    - Extract the ZIP file.

2. **Open the Application**
    - Find the folder `smart-home-electric-tracker`.
    - Double-click `index.html` (it will open in your web browser).

3. **Test the Simulator**
    - Tick the boxes to turn ON Fan, Light, or TV.
    - Choose how many hours they are used.
    - Click "Calculate Usage."
    - See the results for your home’s electric use and bill!

---

## How it Works

- Each appliance uses a certain power (in Watts).
- Turning ON more appliances increases total power.
- The units (kWh) = (Total Power in Watts × Hours) ÷ 1000
- Total cost = Units × Price per Unit (default: ₹8)

---

## Try Changing:

- Add/remove appliances (edit in `index.html` and `script.js`)
- Change the electricity price per unit in `script.js` (look for `pricePerUnit`)
- Make the app look nicer using `style.css`

---

To learn more about how electricity is measured and how bills are calculated, ask your teacher!
