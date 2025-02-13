/**
 * @file create pattern rule
 */

import { createInvalidMessage } from './createInvalidMessage'
import type { CommonRuleOptions, FormItemRule } from './types'

/**
 * pattern rule options
 */
interface PatternRuleOptions extends CommonRuleOptions {
  /**
   * regexp
   */
  pattern: RegExp
}

/**
 * create pattern rule
 * @param field - filed name
 * @param options - options
 * @returns rule
 */
export function createPatternRule(
  field: string,
  options: PatternRuleOptions,
): FormItemRule {
  return {
    pattern: options.pattern,
    message: options.message ?? createInvalidMessage(field),
    trigger: options.trigger || ['blur'],
  }
}
