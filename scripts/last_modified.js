const currentYear = new Date().getFullYear();
let year = document.getElementById("currentYear");
year.innerHTML = currentYear;
const modifiedYear = document.lastModified;
document.getElementById('lastModified').innerText = modifiedYear;
li.textContent = input.variable;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);