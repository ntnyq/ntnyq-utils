
export type Mode = `dev`|`prod`

export type LogType = `success` | `warn` | `error` | `info` | `debug`

export type LogColor = `green` | `yellow` | `red` | `blue` | `magenta` | `cyan` | `white`

export type LogColorMap = Record<LogType, LogColor>

export type Time = string | boolean

export interface LoggerOptions {
  prefix: string
  type: boolean
  enable: boolean
  mode: Mode
  time: Time
}

export interface Logger {
  debug: (...args: any[]) => void
  success: (...args: any[]) => void
  warn: (...args: any[]) => void
  error: (...args: any[]) => void
  info: (...args: any[]) => void
  log: (type: LogType, ...args: any[]) => void
}
