# One-Field
This was a rewrite of the first app I ever wrote (which landed me a job), it can be found [here.]('https://github.com/Classic-Paterson/OneField')
However, this one was completly written using PseudoCode and auto generate from ChatGPT.

# Transcript

DEFINE a `Web Component` using `React` with the name `OneField`

INPUT `Time Left Office` OR `Time Left Last sitee`

INPUT `Time Arrive Site`

INPUT `Time Left Site`

INPUT `Time Arrive next site` OR `Time arrive office`

INPUT `Service Number`

INPUT `Part Number` AND `Serial Number` of part going in

INPUT `Part Number` AND `Serial Number` of part going out

GENERATE an `Email` template to send with all relevant information to coordinator

``` javascript
import React, { useState } from 'react';

const OneField = () => {
  const [timeLeftOffice, setTimeLeftOffice] = useState('');
  const [timeArriveSite, setTimeArriveSite] = useState('');
  const [timeLeftSite, setTimeLeftSite] = useState('');
  const [timeArriveNextSite, setTimeArriveNextSite] = useState('');

  const setCurrentTime = (setTime) => {
    // Get the current time
    const currentTime = new Date();

    // Round the minutes to the nearest 15
    let minutes = currentTime.getMinutes();
    minutes = Math.round(minutes / 15) * 15;

    // Set the time in the input field
    setTime(`${currentTime.getHours()}:${minutes}`);
  };

  return (
    <div>
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
      <input type="text" />
      <br />
      <label>Part Number:</label>
      <input type="text" />
      <br />
      <label>Serial Number of part going in:</label>
      <input type="text" />
      <br />
      <label>Part Number:</label>
      <input type="text" />
      <br />
      <label>Serial Number of part going out:</label>
      <input type="text" />
    </div>
  );
};

export default OneField;
```

```
can the inputs that have "time" have a button to auto populate the input with the current time rounded to the nearest 15 minutes 
```

``` javascript
import React, { useState } from 'react';

const OneField = () => {
  const [timeLeftOffice, setTimeLeftOffice] = useState('');
  const [timeArriveSite, setTimeArriveSite] = useState('');
  const [timeLeftSite, setTimeLeftSite] = useState('');
  const [timeArriveNextSite, setTimeArriveNextSite] = useState('');

  const setCurrentTime = (setTime) => {
    // Get the current time
    const currentTime = new Date();

    // Round the minutes to the nearest 15
    let minutes = currentTime.getMinutes();
    minutes = Math.round(minutes / 15) * 15;

    // Set the time in the input field
    setTime(`${currentTime.getHours()}:${minutes}`);
  };

  return (
    <div>
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
      <input type="text" />
      <br />
      <label>Part Number:</label>
      <input type="text" />
      <br />
      <label>Serial Number of part going in:</label>
      <input type="text" />
      <br />
      <label>Part Number:</label>
      <input type="text" />
      <br />
      <label>Serial Number of part going out:</label>
      <input type="text" />
    </div>
  );
};

export default OneField;
```

```
can you include the `generateEmail` function to the example
```

```javascript
import React, { useState } from 'react';

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
```

```
Can you make this mobile responsive, have padding top and bottom, have a max width and add styling: import React, { useState } from 'react';
```

```
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0; /* Add a padding around the top and bottom of the form */
  max-width: 400px; /* Set the maximum width of the form */
}

label {
  margin-bottom: 0.5rem;
}

input {
  width: 80%;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

button {
  width: 80%;
  height: 2.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #0070f3;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #0052cc;
}

button:disabled {
  background-color: #ccc;
  cursor: default;
}
```

