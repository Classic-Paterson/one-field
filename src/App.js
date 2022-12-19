import React, { useState } from "react";
import styled from "styled-components";

const OneFieldWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Label = styled.label`
  font-size: 16px;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 50%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const OneField = () => {
  const [timeLeftOffice, setTimeLeftOffice] = useState("");
  const [timeLeftLastSite, setTimeLeftLastSite] = useState("");
  const [timeArriveSite, setTimeArriveSite] = useState("");
  const [timeLeftSite, setTimeLeftSite] = useState("");
  const [timeArriveNextSite, setTimeArriveNextSite] = useState("");
  const [timeArriveOffice, setTimeArriveOffice] = useState("");
  const [serviceNumber, setServiceNumber] = useState("");
  const [partNumberIn, setPartNumberIn] = useState("");
  const [serialNumberIn, setSerialNumberIn] = useState("");
  const [partNumberOut, setPartNumberOut] = useState("");
  const [serialNumberOut, setSerialNumberOut] = useState("");

  const handleTimeLeftOffice = () => {
    const currentTime = new Date();
    const roundedTime = new Date(Math.ceil(currentTime.getTime() / (15 * 60 * 1000)) * (15 * 60 * 1000));
    setTimeLeftOffice(roundedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  };

  const handleTimeLeftLastSite = () => {
    const currentTime = new Date();
    const roundedTime = new Date(Math.ceil(currentTime.getTime() / (15 * 60 * 1000)) * (15 * 60 * 1000));
    setTimeLeftLastSite(roundedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  };

  const handleTimeArriveSite = () => {
    const currentTime = new Date();
    const roundedTime = new Date(Math.ceil(currentTime.getTime() / (15 * 60 * 1000)) * (15 * 60 * 1000));
    setTimeArriveSite(roundedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  };

  const handleTimeLeftSite = () => {
    const currentTime = new Date();
    const roundedTime = new Date(Math.ceil(currentTime.getTime() / (15 * 60 * 1000)) * (15 * 60 * 1000));
    setTimeLeftSite(roundedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  };

  const handleTimeArriveNextSite = () => {
    const currentTime = new Date();
    const roundedTime = new Date(Math.ceil(currentTime.getTime() / (15 * 60 * 1000)) * (15 * 60 * 1000));
    setTimeArriveNextSite(roundedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  };

  const handleTimeArriveOffice = () => {
    const currentTime = new Date();
    const roundedTime = new Date(Math.ceil(currentTime.getTime() / (15 * 60 * 1000)) * (15 * 60 * 1000));
    setTimeArriveOffice(roundedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  };

  const handleScanBarcodeIn = () => {
    // Implement barcode scanning functionality here
  };

  const handleScanBarcodeOut = () => {
    // Implement barcode scanning functionality here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Generate email template and output to console
    const emailTemplate = `
Service Number: ${serviceNumber}
Time Left Office: ${timeLeftOffice}
Time Left Last Site: ${timeLeftLastSite}
Time Arrive Site: ${timeArriveSite}
Time Left Site: ${timeLeftSite}
Time Arrive Next Site: ${timeArriveNextSite}
Time Arrive Office: ${timeArriveOffice}
Part Number In: ${partNumberIn}
Serial Number In: ${serialNumberIn}
Part Number Out: ${partNumberOut}
Serial Number Out: ${serialNumberOut}
`;

    console.log(emailTemplate);
  };

  return (
    <OneFieldWrapper>
      <Form onSubmit={handleSubmit}>
        <Label>Time Left Office:</Label>
        <Input type="text" value={timeLeftOffice} onChange={(event) => setTimeLeftOffice(event.target.value)} />
        <Button type="button" onClick={handleTimeLeftOffice}>
          Set Time
        </Button>
        <Label>Time Left Last Site:</Label>
        <Input type="text" value={timeLeftLastSite} onChange={(event) => setTimeLeftLastSite(event.target.value)} />
        <Button type="button" onClick={handleTimeLeftLastSite}>
          Set Time
        </Button>
        <Label>Time Arrive Site:</Label>
        <Input type="text" value={timeArriveSite} onChange={(event) => setTimeArriveSite(event.target.value)} />
        <Button type="button" onClick={handleTimeArriveSite}>
          Set Time
        </Button>

        <Label>Time Left Site:</Label>
        <Input type="text" value={timeLeftSite} onChange={(event) => setTimeLeftSite(event.target.value)} />
        <Button type="button" onClick={handleTimeLeftSite}>
          Set Time
        </Button>

        <Label>Time Arrive Next Site:</Label>
        <Input type="text" value={timeArriveNextSite} onChange={(event) => setTimeArriveNextSite(event.target.value)} />
        <Button type="button" onClick={handleTimeArriveNextSite}>
          Set Time
        </Button>

        <Label>Time Arrive Office:</Label>
        <Input type="text" value={timeArriveOffice} onChange={(event) => setTimeArriveOffice(event.target.value)} />
        <Button type="button" onClick={handleTimeArriveOffice}>
          Set Time
        </Button>

        <Label>Service Number:</Label>
        <Input type="text" value={serviceNumber} onChange={(event) => setServiceNumber(event.target.value)} />

        <Label>Part Number In:</Label>
        <Input type="text" value={partNumberIn} onChange={(event) => setPartNumberIn(event.target.value)} />
        <Button type="button" onClick={handleScanBarcodeIn}>
          Scan Barcode
        </Button>

        <Label>Serial Number In:</Label>
        <Input type="text" value={serialNumberIn} onChange={(event) => setSerialNumberIn(event.target.value)} />
        <Button type="button" onClick={handleScanBarcodeIn}>
          Scan Barcode
        </Button>

        <Label>Part Number Out:</Label>
        <Input type="text" value={partNumberOut} onChange={(event) => setPartNumberOut(event.target.value)} />
        <Button type="button" onClick={handleScanBarcodeOut}>
          Scan Barcode
        </Button>

        <Label>Serial Number Out:</Label>
        <Input type="text" value={serialNumberOut} onChange={(event) => setSerialNumberOut(event.target.value)} />
        <Button type="button" onClick={handleScanBarcodeOut}>
          Scan Barcode
        </Button>

        <Button type="submit">Submit</Button>
      </Form>
    </OneFieldWrapper>
  );
};

export default OneField;
