import { createStorage as create } from './storage'
import { resolveOptions } from './options'
import type { Options } from './types'

export const WebStorage = create(resolveOptions(sessionStorage))

export const createStorage = (storage: Storage = sessionStorage, options: Options = {}) => {
  return create(resolveOptions(storage, options))
}

export const createSessionStorage = (options: Options = {}) => {
  return createStorage(sessionStorage, options)
}

export const createLocalStorage = (options: Options = {}) => {
  return createStorage(localStorage, options)
}

export * from './types'
export * from './options'
