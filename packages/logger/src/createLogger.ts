import dayjs from 'dayjs'
import c from 'picocolors'
import { resolveOptions } from './resolveOptions'
import type { LogColorMap, Logger, LoggerOptions } from './types'

export const createLogger = (options?: Partial<LoggerOptions>): Logger => {
  const opts = resolveOptions(options)
  return {
    debug(msg) {
      if (opts.mode === 'prod') {
        return
      }
      this.log('debug', msg)
    },
    success(msg) {
      this.log('success', msg)
    },
    warn(msg) {
      this.log('warn', msg)
    },
    error(msg) {
      this.log('error', msg)
    },
    info(msg) {
      this.log('info', msg)
    },
    log(type, msg) {
      if (!opts.enable) {
        return
      }
      const color: LogColorMap = {
        success: 'green',
        warn: 'yellow',
        error: 'red',
        info: 'blue',
        debug: 'cyan',
      }
      const typeColor = color[type]
      const typeName = `[${type}]`
      const content: string[] = []

      if (opts.prefix) {
        content.push(opts.prefix)
      }
      if (opts.time) {
        content.push(c.magenta(dayjs().format(opts.time as string)))
      }
      if (opts.type) {
        content.push(c[typeColor](typeName), msg)
      } else {
        content.push(c[typeColor](msg))
      }

      console.log(...content)
    },
  }
}
