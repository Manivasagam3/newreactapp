import React, { useState } from 'react'
import './Booking.css'
import Seat from './Seat';


const Booking = () => {
  const[from,setFrom]=useState(" ");
  const[to,setTo]=useState(" ");
  const[date,setDate]=useState(" ");
  const[submit,setSubmit]=useState(false);
  const handlesubmit=(e)=>{
e.preventDefault();
console.log("from:",from);
console.log("to",to);
console.log("date",date);
setSubmit(true);
  }

  return (
    <>
    <div className='background'>
  
    <h1>welcome to busses travels</h1>
     <div className='forms'>
      <form className='items' onSubmit={handlesubmit} >
        <label>From:</label>
        <input type="text" value={from} onChange={(e)=>setFrom(e.target.value)}/>
        <label>To:</label>
        <input type='text' value={to} onChange={(e)=>setTo(e.target.value)}/>
        <label>Date:</label>
        <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} />
        <button>submit</button>
      </form>

     </div>
     {
      submit &&(
        <Seat/>
      )
     }
     
     </div>
    </>
  )
}

export default Booking

