/**
 * transform given string to kekabCase
 *
 * @param input given string
 * @returns string in kekabCase
 *
 * @example
 * ```
 * import { kekabCase } from '@ntnyq/utils'
 * kekabCase('FooBarBaz') // foo-bar-baz
 * ```
 */
export function kekabCase(input: string) {
  return input
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}
