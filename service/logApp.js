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
        const logTypes = faker.helpers.arrayElement(['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL']); // Jenis log yang tidak umum
        const timestamp = moment(); // Format timestamp ISO 8601
        const sourceIP = faker.internet.ipv4();
        const username = faker.internet.username();
        const applicationName = "customApp"; // Nama aplikasi kustom
        const eventId = Math.floor(Math.random() * 10000); // ID event acak
        const message = faker.lorem.sentence();
        const logFilePath = path.join(__dirname, 'customApp.log');

        // Format kustom
        const logformat = `[${timestamp}] (${applicationName}:${eventId}) [${sourceIP}] ${username} - ${logTypes} - ${message}`;
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
        const logTypes = faker.helpers.arrayElement(['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL']); // Jenis log yang tidak umum


        // Format syslog
        const pri = fcility * 8 + severity;
        const logFormat = `<${pri}>${timestamp} ${applicationName}[${eventId}] ${sourceIP} ${username} - ${logTypes} - ${message}`
        log(logFormat, logFilePath)
        return logFormat;

    } catch (error) {
        return `Error: ${error.message}`
    }
}

function jsonGenerateLog() {
    try {
        const logTypes = faker.helpers.arrayElement(['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL']); // Jenis log yang tidak umum
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
            "logType": logTypes,
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
        const logTypes = faker.helpers.arrayElement(['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL']); // Jenis log yang tidak umum
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
        const logFormat =  `${timestamp} ${logTypes.toUpperCase()} [**${applicationName}**:${eventId}]: ${protocol} ${sourceIP}:${sourcePort} -> ${destinationIP}:${destinationPort} - ${username} - ${message}`;
        log(logFormat, logFilePath)
        return logFormat

    } catch (error) {
        return `Error: ${error.message}`
    }
}

function multiline_otto() {
try {
    function generateLogLine(timestamp) {
        const uuid = faker.internet.ipv6;
        const data = faker.git.commitSha(); // Generate random data
        const key = `BP-REPORTING-RETRY-SP${faker.helpers.rangeToNumber({min: 1000000000000000000, max: 9999999999999999999})}~1`;
        const errorDesc = 'Post "http://10.10.43.40:34451/reporting/update": dial tcp 10.10.43.40:34451: connect: connection refused';
    
    
    
        const logLines = [
            `${timestamp} dc-ottosecure-app docker/ottofin-update-transaction-data-sch[1921817]: #033[0;32m[INFO]  #033[0m#033[0;34m2025/01/25 21:17:45 #033[0m[${uuid}][595][10][ConsumeRedis]Key: ${key}, Data: models.RedisBPRetry{KafkaTrxModel:models.KafkaTrxModel{InvoiceNo:"", OrderID:"", MerchantID:"", MerchantName:"", CustomerEmail:"", CustomerPhone:0, CustomerName:"", Amount:0, NettAmount:0, PaymentMethod:0, TrxType:0, ShippingDetail:"", IssuerRefNum:"", Link:"", Status:0, Notes:"", IsEmailSent:false, IsWASent:false, ExpiredAt:time.Date(1, time.January, 1, 0, 0, 0, 0, time.UTC), UpdatedAt:time.Date(1, time.January, 1, 0, 0, 0, 0, time.UTC), Type:0, Source:0, Transactiontime:time.Date(1, time.January, 1, 0, 0, 0, 0, time.UTC), CPAN:"", TerminalID:"", CreatedAt:time.Date(1, time.January, 1, 0, 0, 0, 0, time.UTC)}, HeaderType:"", ID:"", ErrorDesc:"${errorDesc}"}`,
            `${timestamp} dc-ottosecure-app docker/ottofin-update-transaction-data-sch[1921817]: #033[0;32m[INFO]  #033[0m#033[0;34m2025/01/25 21:17:45 #033[0m[context.Background][Post]REQUEST:`,
            `${timestamp} dc-ottosecure-app docker/ottofin-update-transaction-data-sch[1921817]: POST /reporting/update HTTP/1.1#015`,
            `${timestamp} dc-ottosecure-app docker/ottofin-update-transaction-data-sch[1921817]: Host: 10.10.43.40:34451#015`,
            `${timestamp} dc-ottosecure-app docker/ottofin-update-transaction-data-sch[1921817]: User-Agent: Go-http-client/1.1#015`,
            `${timestamp} dc-ottosecure-app docker/ottofin-update-transaction-data-sch[1921817]: Content-Length: 731#015`,
            `${timestamp} dc-ottosecure-app docker/ottofin-update-transaction-data-sch[1921817]: Authorization: #015`,
            `${timestamp} dc-ottosecure-app docker/ottofin-update-transaction-data-sch[1921817]: Timestamp: ${faker.helpers.rangeToNumber({min: 1700000000000000000, max: 1800000000000000000})}#015`,
            `${timestamp} dc-ottosecure-app docker/ottofin-update-transaction-data-sch[1921817]: Accept-Encoding: gzip#015`,
            `${timestamp} dc-ottosecure-app docker/ottofin-update-transaction-data-sch[1921817]: #015`,
            `${timestamp} dc-ottosecure-app docker/ottofin-update-transaction-data-sch[1921817]: {"data":"${data}"}`
        ];
    
        return logLines.join('\n');
    }
    
    
    function generateLogs(numLogs) {
        let logs = "";
        for (let i = 0; i < numLogs; i++) {
        const timestamp = new Date().toISOString();
        logs += generateLogLine(timestamp) + "\n";
        }
        return logs;
    }
        
    const numLogsToGenerate = 2; // atau berapapun jumlah log yang diinginkan
    const logData = generateLogs(numLogsToGenerate);
    
        // tulis log ke file, atau kirim ke konsol
        // console.log(logData);
    fs.writeFileSync('multilineOtto.log', logData, 'utf-8');
    
    console.log(`Generated ${numLogsToGenerate} log entries and saved to wazuh_fake_logs.txt`);
} catch (error) {
    return `Error: ${error.message}`
}

}

module.exports = {
    customGenerateLog,
    syslogGenerateLog,
    jsonGenerateLog,
    snort_fullGeneratorLog,
    multiline_otto
}