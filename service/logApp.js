const { faker } = require('@faker-js/faker');
const moment = require('moment');
const fs = require('fs');
const path = require('path');

function log(message, logFilePath) {
  const logMessage = `${message}\n`;
  console.log(logMessage);
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}

function customGenerateLog() {
    try {
        const logTypes = ['AUTH', 'SQL', 'NETWORK', 'SYS']; // Jenis log yang tidak umum
        const logType = logTypes[Math.floor(Math.random() * logTypes.length)];
        const timestamp = moment(); // Format timestamp ISO 8601
        const sourceIP = faker.internet.ip();
        const username = faker.internet.username();
        const applicationName = "customApp"; // Nama aplikasi kustom
        const eventId = Math.floor(Math.random() * 10000); // ID event acak
        const message = faker.lorem.sentence();
        const logFilePath = path.join(__dirname, 'customApp.log');

        // Format kustom
        const logformat = `[${timestamp}] (${applicationName}:${eventId}) <${sourceIP}> ${username} - ${logType} - ${message}`;
        log(logformat, logFilePath);
        return logformat;

    } catch (error) {
        return `Error: ${error.message}`
    }
}

function syslogGenerateLog() {
    try {
        const fcility = 16; // local0
        const severity = 6; // Informational
        const timestamp = moment(); // Format timestamp ISO 8601
        const sourceIP = faker.internet.ipv4();
        const username = faker.internet.username();
        const applicationName = "syslogApp"; // Nama aplikasi kustom
        const eventId = Math.floor(Math.random() * 10000); // ID event acak
        const message = faker.lorem.sentence();
        const logFilePath = path.join(__dirname, 'syslogApp.log');
        const logTypes = ['AUTH', 'SQL', 'NETWORK', 'SYS']; // Jenis log yang tidak umum
        const logType = logTypes[Math.floor(Math.random() * logTypes.length)];

        // Format syslog
        const pri = fcility * 8 + severity;
        const logFormat = `<${pri}>${timestamp} ${applicationName}[${eventId}] ${sourceIP} ${username} ${logType} - ${message}`
        log(logFormat, logFilePath)
        return logFormat;

    } catch (error) {
        return `Error: ${error.message}`
    }
}

function jsonGenerateLog() {
    try {
        const timestamp = moment(); // Format timestamp ISO 8601
        const sourceIP = faker.internet.ip();
        const username = faker.internet.username();
        const applicationName = "jsonApp"; // Nama aplikasi kustom
        const eventId = Math.floor(Math.random() * 10000); // ID event acak
        const message = faker.lorem.sentence();
        const logFilePath = path.join(__dirname, 'jsonApp.log')

        // Format json
        const logFormat = {
            "timestamp": timestamp,
            "sourceIP": sourceIP,
            "username": username,
            "applicationName": applicationName,
            "eventId": eventId,
            "message": message
        }
        
        const logMessage = JSON.stringify(logFormat);
        console.log(logMessage);
            fs.appendFile(logFilePath, logMessage, (err) => {
                if (err) {
                console.error('Error writing to log file:', err);
                }
            });
        
        return logFormat

    } catch (error) {
        return `Error: ${error.message}`
    }
}

function snort_fullGeneratorLog() {
    try {
        const timestamp = moment().format('MM/DD-HH:mm:ss.SSS')
        const sourceIP = faker.internet.ip();
        const username = faker.internet.username();
        const applicationName = "snortApp"; // Nama aplikasi kustom
        const eventId = Math.floor(Math.random() * 10000); // ID event acak
        const message = faker.lorem.sentence();
        const protocol = faker.internet.protocol();
        const sourcePort = faker.internet.port();
        const destinationIP = faker.internet.ip();
        const destinationPort = faker.internet.port();
        const logFilePath = path.join(__dirname, 'snortApp.log')

        // Format snort
        const logFormat = `[**] [1:1000001:0] [**] [Username: ${username}] [ApplicationName: ${applicationName}] {${protocol}} ${sourceIP}:${sourcePort} -> ${destinationIP}:${destinationPort}`
        log(logFormat, logFilePath)
        return logFormat

    } catch (error) {
        return `Error: ${error.message}`
    }
}

module.exports = {
    customGenerateLog,
    syslogGenerateLog,
    jsonGenerateLog,
    snort_fullGeneratorLog
}