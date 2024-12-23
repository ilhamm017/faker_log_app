const express = require('express');
const app = express();
const servie = require('../service/logApp')

app.get('/custom', (req, res) => {
  const logMessage = servie.customGenerateLog();
  res.send(logMessage + '\n');
});

app.get('/syslog', (req, res) => {
  const logMessage = servie.syslogGenerateLog();
  res.send(logMessage + '\n');

})

app.get('/json', (req, res) => {
  const logMessage = servie.jsonGenerateLog();
  res.send(logMessage + '\n');

})

app.get('/snort', (req, res) => {
  const logMessage = servie.snort_fullGeneratorLog();
  res.send(logMessage + '\n');

})




// app.get('/stream', (req, res) => {
//   res.writeHead(200, {
//       'Content-Type': 'text/event-stream', // Penting: Gunakan event-stream
//       'Cache-Control': 'no-cache',
//       'Connection': 'keep-alive'
//   });

//   const intervalId = setInterval(() => {
//       const logMessage = generateLog();
//       log(logMessage);
//       res.write(`data: ${logMessage}\n\n`); // Format Server-Sent Events
//   }, 5000);

//   req.on('close', () => {
//       clearInterval(intervalId); // Berhenti mengirim data saat klien menutup koneksi
//       console.log('Client closed connection');
//   });
// });