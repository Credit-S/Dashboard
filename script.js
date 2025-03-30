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
