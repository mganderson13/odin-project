const dropDownButton = document.getElementById("dropDownButton");
const dropDownList = document.getElementById("dropDownList");
dropDownButton.addEventListener("click", function () {
    dropDownList.classList.toggle("show");
})