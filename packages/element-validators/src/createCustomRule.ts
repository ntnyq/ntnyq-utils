/**
 * @file createCustomRule
 */

import { createInvalidMessage } from './createInvalidMessage'
import type { CommonRuleOptions, FormItemRule } from './types'

/**
 * custom rule options
 */
export interface CustomRuleOptions<T> extends CommonRuleOptions {
  validator: (val: T) => boolean
}

/**
 * create custom rule
 * @param field field name
 * @param options options
 * @returns rule
 */
export function createCustomRule<T = string>(
  field: string,
  options: CustomRuleOptions<T>,
): FormItemRule {
  return {
    trigger: options.trigger || ['blur'],
    validator(_, val, cb) {
      return options.validator(val)
        ? cb()
        : cb(new Error(options.message ?? createInvalidMessage(field)))
    },
  }
}
