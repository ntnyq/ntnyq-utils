/**
 * @file storage
 */

import type { CreateStorageOptions } from './types'

export function createStorage({
  prefixKey = '',
  storage = sessionStorage,
  timeout = null,
}: Partial<CreateStorageOptions> = {}) {
  class WebStorage {
    #storage: Storage
    #prefixKey?: string

    constructor() {
      this.#storage = storage
      this.#prefixKey = prefixKey
    }

    /**
     * Get prefixed storage key
     * @param key storage key
     * @returns prefixed storage key
     */
    #getKey(key: string) {
      return `${this.#prefixKey}${key}`.toUpperCase()
    }

    /**
     * Set cached data by key
     * @param key storage key
     * @param value storage value
     * @param expire expire time, unit: second
     */
    set(key: string, value: any, expire: number | null = timeout) {
      const data = JSON.stringify({
        value,
        time: Date.now(),
        expire: expire ? Date.now() + expire * 1000 : null,
      })

      this.#storage.setItem(this.#getKey(key), data)
    }

    /**
     * Get cached data by key
     * @param key storage key
     * @param defaultValue default value
     * @returns cached value
     */
    get(key: string, defaultValue: any = null) {
      const val = this.#storage.getItem(this.#getKey(key))
      if (!val) return defaultValue

      try {
        const { value, expire } = JSON.parse(val)
        if (!expire || expire > Date.now()) {
          return value
        }
        this.remove(key)
      } catch {
        return defaultValue
      }
    }

    /**
     * Remove cached data by key
     * @param key storage key
     */
    remove(key: string) {
      this.#storage.removeItem(this.#getKey(key))
    }

    /**
     * Clear all cached data on instance
     */
    clear() {
      this.#storage.clear()
    }
  }

  return new WebStorage()
}
