import logger, { createLogger } from '@ntnyq/logger'

const loggerWithoutType = createLogger({ type: false })
const loggerWithPrefix = createLogger({ prefix: 'prefix' })
const loggerWithTime = createLogger({ time: true })
const loggerWithFormat = createLogger({ time: 'HH:mm:ss' })
const disabledLogger = createLogger({ enable: false })
const loggerInProdMode = createLogger({ mode: 'prod' })

function createLoggerGroup(group: string, fn?: () => void) {
  console.log(`\n============ Group start: ${group} ============\n`)
  fn?.()
  console.log(`\n============ Group end: ${group} ============\n`)
}

export function playLogger() {
  createLoggerGroup('default logger', () => {
    logger.debug('debug')
    logger.success('success')
    logger.info('info')
    logger.warn('warn')
    logger.error('error')
  })

  createLoggerGroup('logger without type', () => {
    loggerWithoutType.debug('debug')
    loggerWithoutType.success('success')
    loggerWithoutType.info('info')
    loggerWithoutType.warn('warn')
    loggerWithoutType.error('error')
  })

  createLoggerGroup('logger with prefix', () => {
    loggerWithPrefix.debug('debug')
    loggerWithPrefix.success('success')
    loggerWithPrefix.info('info')
    loggerWithPrefix.warn('warn')
    loggerWithPrefix.error('error')
  })

  createLoggerGroup('logger with time', () => {
    loggerWithTime.debug('debug')
    loggerWithTime.success('success')
    loggerWithTime.info('info')
    loggerWithTime.warn('warn')
    loggerWithTime.error('error')
  })

  createLoggerGroup('logger with time format', () => {
    loggerWithFormat.debug('debug')
    loggerWithFormat.success('success')
    loggerWithFormat.info('info')
    loggerWithFormat.warn('warn')
    loggerWithFormat.error('error')
  })

  createLoggerGroup('disabled logger', () => {
    disabledLogger.debug('debug')
    disabledLogger.success('success')
    disabledLogger.info('info')
    disabledLogger.warn('warn')
    disabledLogger.error('error')
  })

  createLoggerGroup('logger in prod mode', () => {
    loggerInProdMode.debug('debug')
    loggerInProdMode.success('success')
    loggerInProdMode.info('info')
    loggerInProdMode.warn('warn')
    loggerInProdMode.error('error')
  })
}
