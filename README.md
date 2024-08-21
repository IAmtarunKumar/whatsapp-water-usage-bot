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
- **ExcelJS**: For creating and manipulating Excel sheets.
- **Ngrok**: For exposing the local server to the internet.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/whatsapp-water-usage-bot.git
   cd whatsapp-water-usage-bot
   ```



2. **Install Dependencies**
   ```bash
   npm install
   ```



3. **Configure Environment Variables**
   ```bash
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
EXCEL_FILE_PATH=./water_usage_data.xlsx
   ```


