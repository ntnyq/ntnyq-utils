import type { LoggerOptions, Mode } from './types'

const defaultOptions = {
  prefix: ``,
  type: true,
  enable: true,
  mode: `dev` as Mode,
  time: false,
}
const defaultTimeFormat = `YYYY-MM-DD HH:mm:ss`

export function resolveOptions (options?: Partial<LoggerOptions>): LoggerOptions {
  if (options?.time === true) {
    options.time = defaultTimeFormat
  }
  return { ...defaultOptions, ...options }
}
