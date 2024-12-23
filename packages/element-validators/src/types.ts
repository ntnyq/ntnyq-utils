/**
 * @file types
 */

import type { Arrayable } from '@ntnyq/utils'

export type { FormItemRule, FormRules } from 'element-plus'

export type Trigger = 'blur' | 'change'

/**
 * Common rule options
 */
export interface CommonRuleOptions {
  /**
   * Trigger mode
   */
  trigger?: Arrayable<Trigger>

  /**
   * Error message
   */
  message?: string
}

/**
 * Creator Options
 */
export interface Options {}
