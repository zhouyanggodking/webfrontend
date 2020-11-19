export default class Logger {
  static log(message) {
    console.log(message);
  }

  static logToServer(message) {
    console.log(`[log to server] - ${message}`);
  }
}