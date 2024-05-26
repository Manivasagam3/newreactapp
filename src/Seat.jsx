import React, { useState } from 'react';
import './Seat.css';


const Seat = () => {
  const [seat, setSeat] = useState(Array(21).fill(false));
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const[passengerName,setPassengerName]=useState(" ");
  const[contactNumber,setContactNumber]=useState(" ");

  const handleClick = (index) => {
    if (!seat[index]) {
      setSelectedSeat(index);
    } else {
      alert("Seat is already reserved");
    }
  };

  const handleReservation = () => {
    if (selectedSeat !== null) {
      const updatedSeat = [...seat];
      updatedSeat[selectedSeat] = true;
      setSeat(updatedSeat);
      setSelectedSeat(null);
      setBookingConfirmed(false);
      alert("Booking successful!");
    } else {
      alert("Please select a seat");
    }
  };

  const handleBooking = () => {
    setBookingConfirmed(true);
  };
  const handleSubmitBooking=(e)=>{
  e.preventDefault();
  console.log("seat:",selectedSeat+1);
  console.log("passengername:",passengerName);
  console.log("contactnumber:",contactNumber);
  setSelectedSeat("")
  setPassengerName("")
  setContactNumber("")
  }

  return (
    <>
      <div className="new">
        {seat.map((isReserved, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            disabled={isReserved}
            style={{
              margin: "5px",
              width: "50px",
              height: "40px",
              background: isReserved ? "red" : "green"
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
  <div className='button'>
   <button onClick={handleReservation}>reserve</button>
   <button onClick={handleBooking}>confirm booking</button>
   </div>
   {
    bookingConfirmed && (
      <div className='confirm'>
          <h1>booking confirmed</h1>
          
              <form  className="submit" onSubmit={handleSubmitBooking}>
                  <p>seat number: {selectedSeat+1}</p>
                  <label>passenger name:</label>
                  <input type="text" value={passengerName} onChange={(e)=> setPassengerName(e.target.value)}/><br/>
                  <label>contact:</label>
                  <input type="text" value={contactNumber} onChange={(e)=> setContactNumber(e.target.value)}/><br/>
                  <button type="submit">submit</button>
              </form>
          </div>
    
  )
   }

   </>
  )
}

export default Seat
