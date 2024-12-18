const express = require('express');
const app = express();
const os = require('os');
const { faker } = require('@faker-js/faker');
const moment = require('moment');
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'app.log');

function log(message) {
  const logMessage = `${message}\n`;
  console.log(logMessage);
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}

function generateLog() {
  const logTypes = ['AUTH', 'SQL', 'NETWORK', 'SYS']; // Jenis log yang tidak umum
  const logType = logTypes[Math.floor(Math.random() * logTypes.length)];
  const timestamp = moment(); // Format timestamp ISO 8601
  const sourceIP = faker.internet.ip();
  const username = faker.internet.username();
  const applicationName = "MyCustomApp"; // Nama aplikasi kustom
  const eventId = Math.floor(Math.random() * 10000); // ID event acak
  const message = faker.lorem.sentence();


  // Format kustom
  return `[${timestamp}] (${applicationName}:${eventId}) <${sourceIP}> ${username} - ${logType} - ${message}`;
}

app.get('/', (req, res) => {
  const logMessage = generateLog();
  log(logMessage);
  res.send(logMessage + '\n');
});


app.get('/stream', (req, res) => {
  res.writeHead(200, {
      'Content-Type': 'text/event-stream', // Penting: Gunakan event-stream
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
  });

  const intervalId = setInterval(() => {
      const logMessage = generateLog();
      log(logMessage);
      res.write(`data: ${logMessage}\n\n`); // Format Server-Sent Events
  }, 5000);

  req.on('close', () => {
      clearInterval(intervalId); // Berhenti mengirim data saat klien menutup koneksi
      console.log('Client closed connection');
  });
});



const port = 4000;
app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
