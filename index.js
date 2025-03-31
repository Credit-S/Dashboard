// profile name tooltip
document.addEventListener("DOMContentLoaded", function () {
    const profileName = document.querySelector(".profile-text h3");

    if (profileName) {
        profileName.addEventListener("mouseenter", function () {
            const fullName = this.getAttribute("data-fullname");
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.innerText = fullName;
            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left}px`;
            tooltip.style.top = `${rect.bottom + 5}px`;
        });

        profileName.addEventListener("mouseleave", function () {
            const tooltip = document.querySelector(".tooltip");
            if (tooltip) {
                tooltip.remove();
            }
        });
    }
});




// logout trigger
document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.querySelector(".signout-button");
    const confirmLogout = document.getElementById("confirmLogout");

    // Show modal when signout button is clicked
    logoutButton.addEventListener("click", function () {
        let logoutModal = new bootstrap.Modal(document.getElementById("logoutModal"));
        logoutModal.show();
    });

    // Handle actual logout action
    confirmLogout.addEventListener("click", function () {
        window.location.href = "/logout"; // Change this to your logout route
    });
});



// header to display in 768 px and below
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("hidden");
    });
});


// sidebar display trigger
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const dashboardContent = document.querySelector(".dashboard-content");

    // Toggle sidebar visibility
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents immediate closing
        sidebar.classList.toggle("active");
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("active"); // Hide sidebar
        }
    });
});


