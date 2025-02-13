export type LogColor =
  | 'blue'
  | 'cyan'
  | 'green'
  | 'magenta'
  | 'red'
  | 'white'
  | 'yellow'

export type LogColorMap = Record<LogType, LogColor>

export interface Logger {
  debug: (...args: any[]) => void
  error: (...args: any[]) => void
  info: (...args: any[]) => void
  log: (type: LogType, ...args: any[]) => void
  success: (...args: any[]) => void
  warn: (...args: any[]) => void
}

export interface LoggerOptions {
  enable: boolean
  mode: Mode
  prefix: string
  time: Time
  type: boolean
}

export type LogType = 'debug' | 'error' | 'info' | 'success' | 'warn'

export type Mode = 'dev' | 'prod'

export type Time = boolean | string
