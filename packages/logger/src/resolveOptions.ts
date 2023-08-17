import type { LoggerOptions } from './types'

const defaultOptions: LoggerOptions = {
  prefix: '',
  type: true,
  enable: true,
  mode: 'dev',
  time: false,
}
const defaultTimeFormat = 'YYYY-MM-DD HH:mm:ss'

export function resolveOptions(options?: Partial<LoggerOptions>): LoggerOptions {
  if (options?.time === true) {
    options.time = defaultTimeFormat
  }
  return { ...defaultOptions, ...options }
}
