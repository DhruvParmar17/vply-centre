let entries = JSON.parse(localStorage.getItem("vply_entries")) || [];

function saveEntry() {
  const entry = {
    company: document.getElementById("company").value,
    phone: document.getElementById("phone").value,
    godown: document.getElementById("godown").value,
    owner: document.getElementById("owner").value,
    salesman: document.getElementById("salesman").value,
    products: document.getElementById("products").value,
    price: document.getElementById("price").value
  };

  entries.push(entry);
  localStorage.setItem("vply_entries", JSON.stringify(entries));
  alert("Entry saved!");
  clearFields();
}

function clearFields() {
  document.querySelectorAll("input[type='text']").forEach(input => input.value = "");
}

function searchEntries() {
  const query = document.getElementById("search").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const filtered = entries.filter(entry => {
    return Object.values(entry).some(val => val.toLowerCase().includes(query));
  });

  filtered.forEach(entry => {
    const entryDiv = document.createElement("div");
    entryDiv.innerHTML = `
      <strong>${entry.company}</strong><br>
      Phone: ${entry.phone}<br>
      Godown: ${entry.godown}<br>
      Owner: ${entry.owner}<br>
      Salesman: ${entry.salesman}<br>
      Products: ${entry.products}<br>
      Price: ${entry.price}<br><hr>
    `;
    resultsDiv.appendChild(entryDiv);
  });
}
