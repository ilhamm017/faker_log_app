const express = require('express');
const router = express.Router();
const servie = require('../service/logApp')

router.get('/custom', (req, res) => {
  const logMessage = servie.customGenerateLog();
  res.send(logMessage + '\n');
});

router.get('/syslog', (req, res) => {
  const logMessage = servie.syslogGenerateLog();
  res.send(logMessage + '\n');

});

router.get('/json', (req, res) => {
  const logMessage = servie.jsonGenerateLog();
  res.json(logMessage);

});

router.get('/snort', (req, res) => {
  const logMessage = servie.snort_fullGeneratorLog();
  res.send(logMessage + '\n');

});

router.get('/multiline-otto', (req, res) => {
  const logMessage = servie.multiline_otto();
  res.send(logMessage + '\n')
});
  

module.exports = router;


// router.get('/stream', (req, res) => {
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