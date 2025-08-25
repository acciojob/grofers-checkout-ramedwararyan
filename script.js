function calculateTotal() {
  let total = 0;
  document.querySelectorAll(".price").forEach(el => {
    total += Number(el.textContent.trim());
  });
  document.getElementById("ans").textContent = total;
}