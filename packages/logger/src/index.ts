import c from 'picocolors'
import dayjs from 'dayjs'
import { createLogger } from './createLogger'

export { c, dayjs }
export * from './types'
export * from './createLogger'
export * from './resolveOptions'

export default createLogger()
