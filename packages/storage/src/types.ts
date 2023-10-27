/**
 * @file types
 */

export type Nullable<T> = T | null

export interface Options {
  prefixKey?: string
}

export interface ResolvedOptions extends Options {
  storage: Storage
}

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
