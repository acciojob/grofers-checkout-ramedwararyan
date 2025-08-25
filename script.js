function calculateTotal() {
      let prices = document.querySelectorAll(".prices");
      let total = 0;

      // Sum all prices
      prices.forEach(priceCell => {
        total += parseFloat(priceCell.textContent);
      });

      // Create a new row for total
      let table = document.getElementById("groceryTable");
      let row = document.createElement("tr");
      let cell = document.createElement("td");

      cell.colSpan = 2; // single cell spanning across table
      cell.textContent = "Total Price: " + total;

      row.appendChild(cell);
      table.appendChild(row);
    }

    // Call function after DOM is ready
    window.onload = calculateTotal;