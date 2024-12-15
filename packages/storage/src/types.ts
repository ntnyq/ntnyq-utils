/**
 * @file types
 */

export interface CreateStorageOptions {
  /**
   * storage instance
   */
  storage: Storage

  /**
   * storage prefix key
   */
  prefixKey: string

  /**
   * expire time in seconds
   */
  timeout?: Nullable<number>
}

export type Nullable<T> = T | null

export interface Options {
  prefixKey?: string
}

export interface ResolvedOptions extends Options {
  storage: Storage
}
