/**
 * @file createLengthRule
 */

import { createInvalidMessage } from './createInvalidMessage'
import type { CommonRuleOptions, FormItemRule } from './types'

/**
 * length rule options
 */
export interface LengthRuleOptions extends CommonRuleOptions {
  /**
   * type
   *
   * @default string
   */
  type?: 'string' | 'array'

  /**
   * min length
   * @default 0
   */
  min?: number

  /**
   * max length
   */
  max: number
}

/**
 * create length rule
 * @param field - field name
 * @param options - options
 * @returns rule
 */
export function createLengthRule(
  field: string,
  options: LengthRuleOptions,
): FormItemRule {
  return {
    type: options.type || 'string',
    min: options.min || 0,
    max: options.max,
    message: options.message ?? createInvalidMessage(field),
    trigger: options.trigger || ['blur'],
  }
}
