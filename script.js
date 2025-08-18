const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prices = document.querySelectorAll(".prices");
      let sum = 0;

      prices.forEach(price => {
        sum += parseFloat(price.textContent);
      });

      // Remove old total row if exists
      const oldTotal = document.querySelector(".total");
      if (oldTotal) {
        oldTotal.parentElement.remove();
      }

      // Create new row for total
      let table = document.getElementById("groceryTable");
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      cell.colSpan = 2;
      cell.className = "total";
      cell.textContent = "Total Price: " + sum;

      row.appendChild(cell);
      table.appendChild(row);
    };
getSumBtn.addEventListener("click", getSum);

