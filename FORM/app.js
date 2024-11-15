document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Error handling: Check if any field is empty
    if (!fullName || !email || !password) {
        alert("All fields are required. Please fill out the form completely.");
        return; 
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${fullName}, Email: ${email}`;

    // Append the list item to the list container
    const userList = document.getElementById("list-container");
    userList.appendChild(listItem);

    // Clear input fields
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
});

// Toggle user list visibility and update link text
document.getElementById("viewUsers").addEventListener("click", function (event) {
    event.preventDefault();
    const userListContainer = document.getElementById("userListContainer");
    const viewUsersLink = document.getElementById("viewUsers");

    if (userListContainer.style.display === "none" || userListContainer.style.display === "") {
        userListContainer.style.display = "block";
        viewUsersLink.innerText = "Hide Registered Users";
    } else {
        userListContainer.style.display = "none";
        viewUsersLink.innerText = "View Registered Users";
    }
});
