/**
 * @file types
 */

import type { Arrayable } from '@ntnyq/utils'

export type { FormItemRule, FormRules } from 'element-plus'

/**
 * Common rule options
 */
export interface CommonRuleOptions {
  /**
   * Error message
   */
  message?: string

  /**
   * Trigger mode
   */
  trigger?: Arrayable<Trigger>
}

/**
 * Creator Options
 */
export interface Options {}

export type Trigger = 'blur' | 'change'
