# mfa
# UI for MFA(pincode, biometric authentication, otp authentication) with react, express

This is repository for the Digital Assets Safe MVP with MFA

## Setup & Run
npm install for the needed library in root directory

`npm install`

Install the latest node.js and run src/server/express.js

Server running port: 3001



The command below will create server that processes generating, verifying OTP code and sending it to your email

`node src/server/express.js`

You need to add App passwords for your devices

Go to https://myaccount.google.com/security

And then go to the security tab and go into 2-step verification

Go to App passwords and create your App password

And then write down them to .env file

It will let your gmail send OTP code

You can run the app now

port: 3000

`npm start`



