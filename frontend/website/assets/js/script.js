document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5001/api/priests")
        .then(response => response.json())
        .then(priests => {
            const priestsContainer = document.getElementById("priests-list");
            priests.forEach(priest => {
                const priestCard = document.createElement("div");
                priestCard.classList.add("priest-card");
                priestCard.innerHTML = `
                    <h3>${priest.name}</h3>
                    <p>Specialization: ${priest.specialization}</p>
                    <p>Price: ₹${priest.pricePerSession}</p>
                    <a href="priest-profile.html?id=${priest._id}" class="btn">View Profile</a>
                `;
                priestsContainer.appendChild(priestCard);
            });
        })
        .catch(error => console.error("Error fetching priests:", error));
});
