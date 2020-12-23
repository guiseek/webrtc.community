export class Logger {
  static logColor = '#2196F3'
  static infoColor = 'purple'
  static warnColor = 'orange'
  static errorColor = 'red'

  static log(message: any, color = Logger.logColor) {
    console.log(`%c${message}`, `color:${color}`)
  }

  static info(message: any, color = Logger.infoColor) {
    console.info(`%c${message}`, `color:${color}`)
  }

  static warn(message: any, color = Logger.warnColor) {
    console.warn(`%c${message}`, `color:${color}`)
  }

  static error(message: any, color = Logger.errorColor) {
    console.error(`%c${message}`, `color:${color}`)
  }
}
