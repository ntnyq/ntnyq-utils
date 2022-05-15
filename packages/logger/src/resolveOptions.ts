import type { LoggerOptions, Mode } from './types'

export function resolveOptions (options?: Partial<LoggerOptions>): LoggerOptions {
  const defaultOptions = {
    prefix: ``,
    type: true,
    enable: true,
    mode: `dev` as Mode,
  }
  return { ...defaultOptions, ...options }
}
