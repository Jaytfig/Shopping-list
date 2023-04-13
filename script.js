function submitForm() {
    // Get input value
    var inputValue = document.getElementById("myInput").value;

    // Check if the input value is empty or contains only whitespace
    if (inputValue.trim() === "") {
        return; // Exit the function without adding a new item
    }

    // Create a new list item with the input value
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);

    // Add the new list item to the list
    document.querySelector("ul").appendChild(li);

    // Reset the input field
    document.getElementById("myInput").value = "";

    // Create a delete button for the new item
    var deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete");
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
}


// Add delete functionality to existing list items
var deleteButtons = document.getElementsByClassName("delete");

for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function () {
        this.parentElement.remove();
    });
}
// Event listener for the input field
document.getElementById("myInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        submitForm();
    }
});

// Event listener for the Enter button
document.getElementById("enterButton").addEventListener("click", function () {
    submitForm();
});
