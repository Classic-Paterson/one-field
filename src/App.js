import React, { useState } from 'react';
import './App.css';


const OneField = () => {
  const [timeLeftOffice, setTimeLeftOffice] = useState('');
  const [timeArriveSite, setTimeArriveSite] = useState('');
  const [timeLeftSite, setTimeLeftSite] = useState('');
  const [timeArriveNextSite, setTimeArriveNextSite] = useState('');
  const [serviceNumber, setServiceNumber] = useState('');
  const [partNumberIn, setPartNumberIn] = useState('');
  const [serialNumberIn, setSerialNumberIn] = useState('');
  const [partNumberOut, setPartNumberOut] = useState('');
  const [serialNumberOut, setSerialNumberOut] = useState('');

  const setCurrentTime = (setTime) => {
    // Get the current time
    const currentTime = new Date();

    // Round the minutes to the nearest 15
    let minutes = currentTime.getMinutes();
    minutes = Math.round(minutes / 15) * 15;

    // Set the time in the input field
    setTime(`${currentTime.getHours()}:${minutes}`);
  };

  const generateEmail = (timeLeftOffice, timeArriveSite, timeLeftSite, timeArriveNextSite, serviceNumber, partNumberIn, serialNumberIn, partNumberOut, serialNumberOut) => {
    return `
      Dear Coordinator,

      Here is the information for today's service call:
      Time Left Office: ${timeLeftOffice}
      Time Arrive Site: ${timeArriveSite}
      Time Left Site: ${timeLeftSite}
      Time Arrive next site OR Time arrive office: ${timeArriveNextSite}
      Service Number: ${serviceNumber}
      Part Number (in): ${partNumberIn}
      Serial Number (in): ${serialNumberIn}
      Part Number (out): ${partNumberOut}
      Serial Number (out): ${serialNumberOut}

      Regards,
      [Your Name]
    `;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate the email template
    const email = generateEmail(timeLeftOffice, timeArriveSite, timeLeftSite, timeArriveNextSite, serviceNumber, partNumberIn, serialNumberIn, partNumberOut, serialNumberOut);
    console.log(email)
    // Send the email using your preferred method (e.g. using an email library or API)
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Time Left Office:</label>
      <input type="text" value={timeLeftOffice} onChange={(e) => setTimeLeftOffice(e.target.value)} />
      <button type="button" onClick={() => setCurrentTime(setTimeLeftOffice)}>Set Time</button>
      <br />
      <label>Time Arrive Site:</label>
      <input type="text" value={timeArriveSite} onChange={(e) => setTimeArriveSite(e.target.value)} />
      <button type="button" onClick={() => setCurrentTime(setTimeArriveSite)}>Set Time</button>
      <br />
      <label>Time Left Site:</label>
      <input type="text" value={timeLeftSite} onChange={(e) => setTimeLeftSite(e.target.value)} />
      <button type="button" onClick={() => setCurrentTime(setTimeLeftSite)}>Set Time</button>
      <br />
      <label>Time Arrive next site OR Time arrive office:</label>
      <input type="text" value={timeArriveNextSite} onChange={(e) => setTimeArriveNextSite(e.target.value)} />
      <button type="button" onClick={() => setCurrentTime(setTimeArriveNextSite)}>Set Time</button>
      <br />
      <label>Service Number:</label>
      <input type="text" value={serviceNumber} onChange={(e) => setServiceNumber(e.target.value)} />
      <br />
      <label>Part Number:</label>
      <input type="text" value={partNumberIn} onChange={(e) => setPartNumberIn(e.target.value)} />
      <br />
      <label>Serial Number of part going in:</label>
      <input type="text" value={serialNumberIn} onChange={(e) => setSerialNumberIn(e.target.value)} />
      <br />
      <label>Part Number:</label>
      <input type="text" value={partNumberOut} onChange={(e) => setPartNumberOut(e.target.value)} />
      <br />
      <label>Serial Number of part going out:</label>
      <input type="text" value={serialNumberOut} onChange={(e) => setSerialNumberOut(e.target.value)} />
      <br />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default OneField;