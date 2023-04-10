let count = 0;
document.getElementById("button-addon2").addEventListener("click", function () {
  count++;
  const inputText = document.getElementById("text-field").value;
  if (inputText == "") {
    alert("please input some text!");
  }

  const tableBody = document.getElementById("table-body");

  const tr = document.createElement("tr");
  tr.classList.add("tr-container");
  tr.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputText}</td>
    <td><button class="btn btn-danger btn-delete me-1">Delete</button><button class="btn btn-primary btn-done">Done</button></td>
  `;
  tableBody.appendChild(tr);
  document.getElementById("text-field").value = "";
  const deleteBtn = document.getElementsByClassName("btn-delete");
  for (const btn of deleteBtn) {
    btn.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.display = "none";
    });
  }
  const doneBtn = document.getElementsByClassName("btn-done");

  for (const btn of doneBtn) {
    btn.addEventListener("click", function () {
      btn.parentNode.parentNode.style.textDecoration = "line-through";
    });
  }
});
