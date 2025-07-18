import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

const StripePayment = () => {
  return (
    <div className="h-96 flex justify-center items-center">
          <Alert severity="warning" variant="filled" style={{maxWidth:"400px"}}>
            <AlertTitle>Stripe Method Unavailabe</AlertTitle>
           StripePayment is unavailabe 
          </Alert>
    </div>
  )
}

export default StripePayment
