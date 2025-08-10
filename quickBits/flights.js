import { useState } from "react";

export default function App() {
  const [trip, setTrip] = useState("owf");
  const handleSumbit = (e) => {
    const formBookingType = e.target.elements.type;
    const depDate = e.target.elements.depDate;
    const today = new Date().toISOString().split("T")[0]; // "2023-12-25"
    let backDate;
    if (formBookingType === "rtf") {
      backDate = e.target.elements.backDate;
      if (backDate < depDate) {
        alert("Please enter a valid date");
      }
      alert(
        `You have booked a round-trip flight, departing on ${depDate} and returning on ${backDate}`,
      );
      return;
    }
    if (today > depDate) alert("Please select a valid date");
    alert(`You have booked a one-way flight on ${depDate}`);
    return;
  };
  return (
    <form onSubmit={handleSumbit}>
      <select
        value={trip}
        onChange={(e) => setTrip(e.target.value)}
        name="type"
      >
        <option value="rtf" name="rtf">
          Round-trip flight
        </option>
        <option value="owf" name="owf">
          One-way flight
        </option>
      </select>
      <input type="date" id="dep-date" name="depDate" />
      {trip === "rtf" && <input type="date" id="back-date" name="backDate" />}
      <button type="submit">Book</button>
    </form>
  );
}
