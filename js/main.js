let count = 0;
document.getElementById("button-addon2").addEventListener("click", function () {
  count++;
  const inputText = document.getElementById("text-field").value;
  if (inputText == "") {
    alert("please input some text!");
  }

  const tableBody = document.getElementById("table-body");

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputText}</td>
    <td><button class="btn btn-danger btn-delete me-1">Delete</button><button class="btn btn-primary">Done</button></td>
  `;

  tableBody.appendChild(tr);

  console.log(inputText);
});
