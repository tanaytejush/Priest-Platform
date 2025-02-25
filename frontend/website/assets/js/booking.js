document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const priestId = urlParams.get("id");
    const bookingButton = document.getElementById("confirm-booking");

    bookingButton.addEventListener("click", () => {
        const selectedDate = document.getElementById("booking-date").value;
        if (!selectedDate) {
            alert("Please select a date!");
            return;
        }

        fetch("http://localhost:5001/api/bookings/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ priestId, date: selectedDate })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Booking successful") {
                alert("Booking Confirmed!");
                window.location.href = "dashboard.html";
            } else {
                alert(data.message || "Booking failed");
            }
        })
        .catch(error => console.error("Error:", error));
    });
});
