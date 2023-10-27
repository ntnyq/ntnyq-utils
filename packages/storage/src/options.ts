import type { Options, ResolvedOptions } from './types'

export function resolveOptions(storage: Storage, options: Options = {}): ResolvedOptions {
  return {
    storage,
    ...options,
  }
}
