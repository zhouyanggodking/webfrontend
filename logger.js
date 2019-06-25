const fs = require('fs');

class Logger {
  static info(message) {
    Logger.log('INFO', message)
  }

  static debug(message) {
    Logger.log('DEBUG', message)
  }

  static error(message) {
    Logger.log('ERROR', message)
  }

  static log(level, message) {
    const logMsg = `log level: ${level}, message: ${message} \n`;
    console.log(message);
    fs.writeFileSync(Logger.path, logMsg, {
      flag: 'a'
    });
  }
}

Logger.path = 'log.txt'

module.exports = Logger;