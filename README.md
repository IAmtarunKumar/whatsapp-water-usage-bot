# Water Usage WhatsApp Bot

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your environment variables in a `.env` file
4. Start the server: `node index.js`

## How It Works

- The bot sends a reminder message every 5 minutes to a user.
- Users reply with their water usage data.
- The data is stored in an Excel file with columns for Date and Value.
- The project uses Twilio for WhatsApp messaging and Node.js for the server.

## Technical Architecture

- Node.js server using Express.js
- Twilio API for WhatsApp messaging
- Data stored in an Excel sheet using `xlsx` package
