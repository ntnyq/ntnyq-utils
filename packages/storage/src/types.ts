/**
 * @file types
 */

export interface CreateStorageOptions {
  /**
   * storage prefix key
   */
  prefixKey: string

  /**
   * storage instance
   */
  storage: Storage

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
