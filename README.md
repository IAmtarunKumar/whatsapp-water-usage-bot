# WhatsApp Bot for Water Usage Data Collection

This project involves creating a WhatsApp bot that collects water usage data from users and stores it in an Excel sheet. The bot is designed for factory workers to input daily water usage data, which is then stored for analysis by the factory owner.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Technical Architecture](#technical-architecture)
- [Demo Video](#demo-video)
- [Contact](#contact)

## Features
- Automatically sends a message to the user every 5 minutes asking for water usage data.
- Accepts water usage input (e.g., "100 liters") from the user.
- Stores the input data in an Excel sheet with two columns: "Date" and "Value".
- The bot is built using Twilio/Gupshup WhatsApp API.

## Technologies Used
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **Twilio/Gupshup API**: For interacting with WhatsApp.
- **xlsx**: For creating and manipulating Excel sheets.
- **Ngrok**: For exposing the local server to the internet.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/IAmtarunKumar/whatsapp-water-usage-bot.git
   cd whatsapp-water-usage-bot
   ```


5. **Install Dependencies**
   ```bash
   npm install
   ```




3. **Configure Environment Variables**
   ```bash
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_phone_number
   
   ```

4. **Start Ngrok**
   ```bash
   ngrok http 3000
   ```
Note the forwarding URL provided by Ngrok and update the webhook URL in your Twilio/Gupshup settings.

5. **Run the Server**
   ```bash
   node index.js
   ```

   

## Running the Application

- After starting the server, the bot will automatically send a message to the user every 5 minutes asking for water usage data.
- The user replies with the amount of water used (e.g., "100 liters").
- The bot stores the data in the Excel sheet, including the date and the value provided by the user.

## Technical Architecture

- Twilio/Gupshup WhatsApp API: Used for sending and receiving messages.
- Node.js and Express.js: Handles incoming messages and stores data in an Excel file.
- xlsx: Manages the creation and updating of the Excel file.
- Ngrok: Exposes the local server for testing with the WhatsApp API.

## Screenshort of whatsapp chatbot

![WhatsApp Chat Example](./screenshort/Screenshot_10.png)


## Demo Video

- A short video explaining the application and its code can be found [here](https://github.com/IAmtarunKumar/whatsapp-water-usage-bot?tab=readme-ov-file#features).



## Contact
For any questions or feedback, feel free to reach out:

- Email: tarunkumarmahto2000@gmail.com


   ```css
   
    Make sure to update any placeholders, such as GitHub links, video links, and environment variable names, with your actual project details.

   ```