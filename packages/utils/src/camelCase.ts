/**
 * transform given string to camelCase
 *
 * @param input given string
 * @returns string in camelCase
 *
 * @example
 * ```
 * import { camelCase } from '@ntnyq/utils'
 * camelCase('foo-bar-baz') // fooBarBaz
 * ```
 */
export function camelCase(input: string) {
  return input.replace(/[._-](\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}
