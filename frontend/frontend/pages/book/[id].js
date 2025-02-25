import { useState } from "react";
import { useRouter } from "next/router";
import API from "../../utils/api";

export default function Booking() {
  const router = useRouter();
  const { id: priestId } = router.query;
  const [date, setDate] = useState("");

  const handleBooking = async () => {
    if (!date) {
      alert("Please select a date!");
      return;
    }

    try {
      await API.post("/bookings/book", { priestId, date });
      alert("Booking Confirmed!");
      router.push("/dashboard");
    } catch (error) {
      alert("Booking Failed!");
    }
  };

  return (
    <div>
      <header className="hero">
        <nav>
          <h1 className="logo">🛕 BookMyPriest</h1>
        </nav>
      </header>

      <section className="booking-container">
        <h2>Select a Date</h2>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button onClick={handleBooking} className="btn">Confirm Booking</button>
      </section>
    </div>
  );
}
