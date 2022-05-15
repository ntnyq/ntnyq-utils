import logger, { createLogger } from '@ntnyq/logger'

const loggerWithoutType = createLogger({ type: false })

const loggerWithPrefix = createLogger({ prefix: `prefix` })

const disabledLogger = createLogger({ enable: false })

const loggerInProdMode = createLogger({ mode: `prod` })

function createLoggerGroup (group: string, fn?: () => void) {
  console.log()
  console.log(`Group start: ${group}`)
  console.log()
  fn?.()
  console.log()
  console.log(`Group end: ${group}`)
  console.log()
}

export function playLogger () {
  createLoggerGroup(`default logger`, () => {
    logger.debug(`debug`)
    logger.success(`success`)
    logger.info(`info`)
    logger.warn(`warn`)
    logger.error(`error`)
  })

  createLoggerGroup(`logger without type`, () => {
    loggerWithoutType.debug(`debug`)
    loggerWithoutType.success(`success`)
    loggerWithoutType.info(`info`)
    loggerWithoutType.warn(`warn`)
    loggerWithoutType.error(`error`)
  })

  createLoggerGroup(`logger with prefix`, () => {
    loggerWithPrefix.debug(`debug`)
    loggerWithPrefix.success(`success`)
    loggerWithPrefix.info(`info`)
    loggerWithPrefix.warn(`warn`)
    loggerWithPrefix.error(`error`)
  })

  createLoggerGroup(`disabled logger`, () => {
    disabledLogger.debug(`debug`)
    disabledLogger.success(`success`)
    disabledLogger.info(`info`)
    disabledLogger.warn(`warn`)
    disabledLogger.error(`error`)
  })

  createLoggerGroup(`logger in prod mode`, () => {
    loggerInProdMode.debug(`debug`)
    loggerInProdMode.success(`success`)
    loggerInProdMode.info(`info`)
    loggerInProdMode.warn(`warn`)
    loggerInProdMode.error(`error`)
  })
}
