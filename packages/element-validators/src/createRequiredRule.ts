/**
 * @file createRequiredRule
 */

import type { CommonRuleOptions, FormItemRule } from './types'

/**
 * required rule options
 */
export interface RequiredRuleOptions extends CommonRuleOptions {
  /**
   * Whether the field is inputable
   *
   * @default false
   */
  inputable?: boolean
}

/**
 * create required rule
 * @param field - field name
 * @param options - options
 * @returns rule
 */
export function createRequiredRule(field: string, options: RequiredRuleOptions = {}): FormItemRule {
  const defaultTrigger = options.inputable ? ['blur'] : ['change']
  return {
    required: true,
    message: options.message || (options.inputable ? `请输入${field}` : `请选择${field}`),
    trigger: options.trigger || defaultTrigger,
  }
}
