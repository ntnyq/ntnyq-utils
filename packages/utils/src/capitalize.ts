/**
 * capitalize the given string's first letter
 *
 * @param input given string
 * @returns string first letter capitalize
 *
 * @example
 * ```
 * import { capitalize } from '@ntnyq/utils'
 * capitalize('fooBarBaz') // FooBarBaz
 * ```
 */
export function capitalize(input: string) {
  return `${input.charAt(0).toUpperCase()}${input.slice(1)}`
}
