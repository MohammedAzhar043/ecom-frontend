import { Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import AddressInfo from "./AddressInfo";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserAddresses } from "../../store/action";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Address", "Payment Method", "Order Summary", "Payment"];

  const dispatch = useDispatch();
   
  useEffect(()=>{
      dispatch(getUserAddresses())
  },[dispatch])
  return (
    <div className="py-14 min-h-[calc(100vh-100px)]">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>


      <div className="mt-5">
        {activeStep === 0 && <AddressInfo />}
      </div>
    </div>
  );
};

export default Checkout;
